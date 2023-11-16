# FROM node
FROM node:20.9.0-alpine3.18

WORKDIR /frontend

COPY . .

RUN npm i -g pnpm
RUN pnpm i

CMD ["npm", "start"]
EXPOSE 5173

# --------------------------------
# $ cd /frontend
# $ docker build -t frontend .
# $ docker run -p 5173:5173 --name frontend frontend
# $ docker run -d -p 5173:5173 --name frontend frontend
# Browser: http://localhost:5173