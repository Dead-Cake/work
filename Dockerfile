FROM node:carbon

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src /app
EXPOSE 8080

ARG APP_ENV=production
#ENV PORT = 3000

CMD ["node", "index.js"]



