FROM node:8

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY ./src/sql/product.sql /docker-entrypoint-initdb.d

RUN npm install
# If you are building your code for production
# RUN npm ci --only=productio
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]