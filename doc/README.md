```shell
wget https://img-cdn.finogeeks.club/mop/init.sql-20220519
wget https://img-cdn.finogeeks.club/mop/kong.yml-20220519
wget https://img-cdn.finogeeks.club/mop/.env-20220519
wget https://img-cdn.finogeeks.club/mop/docker-compose.yaml-20220519

cd docker
sudo chown -R 1001 data/mysql

sudo docker-compose up finclip-mysql
sudo docker-compose up -d finclip-mysql

sudo docker-compose ps
sudo docker exec -it finclip-mysql bash

sudo docker-compose up -d
sudo docker-compose down

sudo docker-compose ps

sudo docker-compose logs -f
sudo docker-compose logs -f finclip-mysql
sudo docker-compose logs -f mop-audit-manage-svr

sudo docker-compose stop
sudo docker-compose rm -s -v
rm -rf data  docker-compose.yaml  init.sql  kong.yml .env

http://49.232.6.131:8100/mop/mechanism/#/login
http://49.232.6.131:8100/mop/operate/#/login

finclip@finogeeks.com
123Abc
```