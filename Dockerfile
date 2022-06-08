FROM node:18.1.0 AS webapp
WORKDIR /opt/lsx/webapp

# Install webapp source dependancies
COPY ./webapp/*.json ./
RUN npm install

# Build webapp
COPY ./webapp/src ./src
RUN npm run build

FROM node:18.1.0 AS server
EXPOSE 3100
WORKDIR /opt/lsx/server

# Install server source dependancies
COPY ./server/*.json ./
RUN npm install

# Build server
COPY ./server/src ./src
RUN npm run build

# Get webapp artifact
COPY --from=webapp /opt/lsx/webapp/dist/webapp/. ./public

# Run startscript
COPY ./run.sh ./
RUN chmod +x run.sh

CMD ["./run.sh"]