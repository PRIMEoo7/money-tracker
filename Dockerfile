FROM node:alpine
WORKDIR /user/src/money-tracker-app
COPY package*.json .
#COPY ./yarn.lock .
#RUN yarn install --frozen-lockfile 
#RUN npm ci
RUN npm install
COPY . .
# EXPOSE 4040
# RUN ["npm", "start"]  didnt work CMD worked wth!!!!!
CMD ["npm", "start"]    


