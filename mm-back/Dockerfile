FROM node:8
RUN mkdir -p /usr/src/mm-challenge-back
WORKDIR /usr/src/mm-challenge-back
COPY package.json /usr/src/mm-challenge-back
RUN npm install
COPY . /usr/src/mm-challenge-back
EXPOSE 3210
CMD ["npm", "start"]