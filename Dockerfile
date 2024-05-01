FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN chmod +x /app/entrypoint.sh
RUN npm run build
RUN npm install --global http-server

CMD ["npx", "-y", "http-server", "-p", "8000", "/app/build"]
