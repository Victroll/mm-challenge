FROM node:8
RUN mkdir -p /usr/src/mm-challenge
WORKDIR /usr/src/mm-challenge
COPY package.json /usr/src/mm-challenge
RUN npm install
COPY . /usr/src/mm-challenge
EXPOSE 3210
CMD ["npm", "start"]