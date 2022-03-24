FROM node:slim
WORKDIR /usr/src/json-serverx
COPY . /usr/src/json-serverx
RUN npm install
EXPOSE 9999
CMD ["npx","json-server","--watch","-p", "9999","-H","0.0.0.0","db.json"]