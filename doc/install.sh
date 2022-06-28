#!/bin/bash

FINCLIP_CE_VER=20220519

export basedir=$(cd $(dirname $0); pwd)

export             INIT_SQL=https://img-cdn.finogeeks.club/mop/init.sql-${FINCLIP_CE_VER}
export          KONG_CONFIG=https://img-cdn.finogeeks.club/mop/kong.yml-${FINCLIP_CE_VER}
export         DOT_ENV_FILE=https://img-cdn.finogeeks.club/mop/.env-${FINCLIP_CE_VER}
export   DOCKER_COMPOSE_URL=https://static.finogeeks.club/deploy/docker-compose
export DOCKER_INSTLL_SCRIPT=https://static.finogeeks.club/deploy/docker
export FINCLIP_COMPOSE_FILE=https://img-cdn.finogeeks.club/mop/docker-compose.yaml-${FINCLIP_CE_VER}


basedir=$(cd $(dirname $0); pwd)

read -p "FinClip 安装目录( 更改目录或按<Enter> $basedir ): " FINCLIP_HOME

export FINCLIP_HOME=${FINCLIP_HOME:-$basedir}
mkdir -p $FINCLIP_HOME

command_exists() {
  command -v "$@" > /dev/null 2>&1
}

check() {
  user="$(id -un 2>/dev/null || true)"
  if [ "$user" != 'root' ]; then
    echo "错误：安装程序需要 root 权限" >&2
    exit 1
  fi

  is_Darwin=false; uname -a | grep -qi Darwin && is_Darwin=true
   is_Linux=false; uname -a | grep -qi Linux  &&  is_Linux=true
}

download() {
  local d=$1
  local s=$2

  if [ -z "$d" ] || [ -z "$s" ]; then
    return 1
  fi

  test -e $d && mv $d "$d"-`date +%Y-%m-%d`
  curl -sSL $s -o $d
}

docker_install() {
  command_exists docker && return 0
  curl -sSL $DOCKER_INSTLL_SCRIPT | sh
  service docker start
}

docker_compose_install() {
  command_exists docker-compose && return 0
  download /usr/local/bin/docker-compose $DOCKER_COMPOSE_URL
  chmod +x /usr/local/bin/docker-compose
}

finclip_install() {
 

  if [ -f finclip.tar ]; then
    docker load -i finclip.tar
    \cp -fr * .env $FINCLIP_HOME/
  else
		cd $FINCLIP_HOME
    download docker-compose.yaml $FINCLIP_COMPOSE_FILE
    download kong.yml            $KONG_CONFIG
    download init.sql            $INIT_SQL
    download .env                $DOT_ENV_FILE

    /usr/local/bin/docker-compose pull; sleep 1
  fi

  echo -e "设置 FinClip 访问端口，<Ctrl+退格键> 来删除错误键入"
  read -p "按 <回车键> 来使用默认端口 (8000), 或手动输入: " port
  test -z "$port" && \
    export port=8000
    $is_Darwin && sed -i".env.bak" "s/8000/$port/g" .env
    $is_Linux  && sed -i           "s/8000/$port/g" .env

  cd $FINCLIP_HOME
  BASE_STORAGE_DIR=./data

  $is_Linux && {
    install -o 999  -g 999  -d ${BASE_STORAGE_DIR}/redis
    install -o 1001 -g 1001 -d ${BASE_STORAGE_DIR}/minio
    install -o 1001 -g 1001 -d ${BASE_STORAGE_DIR}/mysql
  }

  /usr/local/bin/docker-compose up -d mysql ; sleep 30
  /usr/local/bin/docker-compose up -d       ; sleep 5
}

check
docker_install
docker_compose_install
finclip_install

echo "FinClip 安装完成 🎉🎉"
