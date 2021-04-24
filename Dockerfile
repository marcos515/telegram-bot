FROM node:14
ENV mongoHost "mongodb://localhost:27017/"
WORKDIR /app/node/
COPY . .
RUN npm i
ENV TELEGRAM_BOT_TOKEN 1736975913:AAHCBtlidd_w7kFLuwlq9aUkuRydPbqvdi4