FROM node:6
RUN mkdir - p /usr/src/mm-challenge-fr
WORKDIR /usr/src/mm-challenge-fr
COPY package.json /usr/src/mm-challenge-fr
RUN npm install
COPY . /usr/src/mm-challenge-fr
EXPOSE 3000
CMD ["npm", "start"]