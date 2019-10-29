# use latest version of node
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# bundle source code
COPY package*.json ./

RUN npm install

COPY . .

# expose port 3000
EXPOSE 3000

# start app with npm
CMD ["npm", "start"]