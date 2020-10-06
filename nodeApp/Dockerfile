FROM node:10.0-alpine
# 設置時區
RUN apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime \
    && echo "Asia/Taipei" > /etc/timezone \
    && apk del tzdata
# 創建App目錄
RUN mkdir -p /usr/src/node-app/
# 設置工作目錄
WORKDIR /usr/src/node-app/

COPY package.json /usr/src/node-app/package.json
RUN npm install

COPY . /usr/src/node-app/

CMD npm start
