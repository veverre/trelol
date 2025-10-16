# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.15.0
ARG PNPM_VERSION=10.17.1

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app
RUN npm install -g pnpm@${PNPM_VERSION}

# Dépendances production seulement
FROM base as deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --prod --frozen-lockfile

FROM deps as build
COPY /. .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM base as final
WORKDIR /usr/src/app
ENV NODE_ENV production
USER node

COPY package.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.output ./.output

EXPOSE 3000
CMD pnpm start