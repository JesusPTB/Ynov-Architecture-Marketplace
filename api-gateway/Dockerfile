FROM node:21

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND yarn.lock are copied
COPY package.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

# Expose port and start application
EXPOSE 3000
CMD [ "yarn", "start" ]
