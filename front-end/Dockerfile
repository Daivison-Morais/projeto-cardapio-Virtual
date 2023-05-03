FROM node

WORKDIR /tmp/react

COPY . .

RUN npm i

RUN chmod a+x /tmp/react/node_modules/.bin/react-scripts

RUN npm run build

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /tmp/react