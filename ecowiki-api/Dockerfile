FROM node:12-alpine
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
COPY package*.json ./
USER root
RUN npm install
COPY --chown=node:node . ./
EXPOSE 3000

CMD ["node","--max-old-space-size=4096","scripts/start.js","npm", "start"]
