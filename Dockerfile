FROM oven/bun:alpine as oven
USER bun
WORKDIR /usr/src/app

COPY . .

RUN ["bun", "install", "--frozen-lockfile"]
RUN ["bun", "run", "build"]

FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=oven /usr/src/app/dist /public
