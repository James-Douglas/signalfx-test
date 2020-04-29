FROM node:10
MAINTAINER CTM DEV <developers@comparethemarket.com.au>
ENV REFRESHED_AT 20-04-29

# Create app directory
WORKDIR src/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json /src/
RUN npm install

# Bundle app source
COPY . /src

EXPOSE 8000

CMD npm run dev
