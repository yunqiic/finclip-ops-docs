```shell
wget https://img-cdn.finogeeks.club/mop/init.sql-20220519
wget https://img-cdn.finogeeks.club/mop/kong.yml-20220519
wget https://img-cdn.finogeeks.club/mop/.env-20220519
wget https://img-cdn.finogeeks.club/mop/docker-compose.yaml-20220519

cd docker
sudo docker-compose up -d finclip-mysql
sudo docker-compose up -d
```