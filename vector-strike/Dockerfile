FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --chown=node:node server.mjs ./
COPY --chown=node:node server ./server
COPY --chown=node:node dist ./dist
RUN mkdir /app/.data && chown node:node /app/.data
USER node
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4317 DATA_DIR=/app/.data
EXPOSE 4317
VOLUME /app/.data
CMD ["node","server.mjs"]
