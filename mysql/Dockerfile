FROM mysql:5.7
COPY init.sql /docker-entrypoint-initdb.d/
ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE example
EXPOSE 3306
