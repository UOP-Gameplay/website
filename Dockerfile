FROM oven/bun:alpine
WORKDIR /usr/src/app

COPY . .

RUN ["bun", "install", "--frozen-lockfile"]
RUN ["bun", "run", "build"]

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
ENTRYPOINT [ "bun", "run", "./dist/server/entry.mjs" ]
