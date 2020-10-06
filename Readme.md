# Docker node-nginx-mysql with loadbalance (https)

Just for record

## Step1

revize the configurations

> /nodeApp/.env
> docker-compose.yml 
> /mysql/Dockerfile  <- revice ENV
> /mysql/init.sql  <- can be ignore if you don't have init data


## Step2

```
cd /nginx-certbox/
``` 

and follow the nginx-certbox document

## Step3

> close nginx-certbox
/nginx-certbox/: docker-compose down

> copy config from nginx-certbox/ to nginx/
/: sudo cp nginx-certbox/data/nginx/app.conf nginx/conf.d/default.conf 

> revice the default.conf
/: vim nginx/conf.d/default.conf 
```
upstream node_cluster {
  server nodejs:3000;
  server nodejs_2:3000;
  server nodejs_3:3000;
}

...

proxy_pass  http://node_cluster;

```

> copy certbot/ to the root of the project
/: sudo cp -r nginx-certbox/certbot/ .

docker-compose up 

# done

