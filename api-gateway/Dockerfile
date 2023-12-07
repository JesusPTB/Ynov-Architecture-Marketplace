FROM node:21

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND yarn.lock are copied
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port and start application
EXPOSE 3000
CMD [ "npm", "run", "start" ]
