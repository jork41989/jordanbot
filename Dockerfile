FROM node:12.9.0-alpine
EXPOSE 3000
COPY . /app
WORKDIR /app

RUN npm install

CMD ["npm", "start"]
