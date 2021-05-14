FROM node:lts-alpine

WORKDIR /laddboxkillarna

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD ["npm", "start" ]
