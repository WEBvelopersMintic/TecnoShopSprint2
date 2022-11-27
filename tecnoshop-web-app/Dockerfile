FROM node:16.1.0

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3000

CMD [ "sh", "-c", "npm start" ]