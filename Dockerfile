FROM denoland/deno:latest

WORKDIR /app

RUN deno install -A -f https://deno.land/x/fresh/init.ts

EXPOSE 8000

CMD ["deno", "task", "start"]
