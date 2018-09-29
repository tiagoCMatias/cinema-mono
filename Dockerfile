FROM node:latest
RUN mkdir -p /usr/src/cinema-mono
WORKDIR /usr/src/cinema-mono
COPY package.json /usr/src/cinema-mono/
RUN npm install
COPY . /usr/src/cinema-mono
EXPOSE 3000
CMD [ "npm", "start" ]