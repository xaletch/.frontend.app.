# BUILD
FROM node:24-alpine AS build

# ENV
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build


FROM node:24-alpine AS production

WORKDIR /app

RUN yarn global add serve
COPY --from=build /app/dist ./

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]