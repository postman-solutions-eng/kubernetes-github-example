
# syntax=docker/dockerfile:1
FROM node:alpine AS base
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src
COPY scripts scripts
COPY postman postman
COPY __tests__ __tests__

FROM node:alpine as cibuilder
WORKDIR /app
COPY --from=base /app ./
RUN npm ci

FROM cibuilder AS test-functional
WORKDIR /app
COPY --from=cibuilder /app ./
RUN npm run test-functional

FROM cibuilder AS test-e2e
WORKDIR /app
COPY --from=cibuilder /app ./
RUN npm run test-e2e

FROM node:alpine AS builder
WORKDIR /app
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/package-lock.json ./package-lock.json
COPY --from=base /app/src ./src
RUN npm ci --production


FROM builder AS app
CMD ["npm", "start"]
