FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

RUN pnpm run build

# RUN npx prisma generate
# RUN npx prisma migrate dev --name init

EXPOSE 3000

CMD [ "pnpm", "run", "start" ]