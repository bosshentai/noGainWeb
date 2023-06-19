FROM node:lts-alpine

WORKDIR /usr/src/app


COPY package.json ./

COPY .docker/entrypoint.sh /usr/src/app/.docker/entrypoint.sh


RUN chmod +x /usr/src/app/.docker/entrypoint.sh

COPY . .


CMD ["/bin/sh","/usr/src/app/.docker/entrypoint.sh"]