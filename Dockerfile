FROM node:22.16.0

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENV SERVER_PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]