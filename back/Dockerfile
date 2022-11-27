FROM node

WORKDIR /app

COPY package*.json .

RUN npm install -g nodemon && npm install

COPY . .

EXPOSE 4000

CMD [ "sh", "-c", "npm run dev" ]