#Install dependencies
FROM node:21

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3001

RUN npm run build

CMD ["npm", "run", "dev"]
