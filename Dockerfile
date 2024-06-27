FROM denoland/deno:latest

WORKDIR /app

COPY . .

RUN deno cache main.ts

RUN deno task build

EXPOSE 8000

CMD ["deno", "task", "start"]
