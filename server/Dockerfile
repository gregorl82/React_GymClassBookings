FROM node:lts

WORKDIR /usr/app

COPY ./package.json ./
RUN yarn

COPY . .

CMD ["yarn", "server:dev"]