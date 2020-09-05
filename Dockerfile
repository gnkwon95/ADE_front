FROM node:12.2.0-alpine as build

RUN apk update && apk add python make g++

#also say
WORKDIR /app

#copy react app to container
COPY . /app/


#prepare container for building react
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

#prepare nginx
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
