FROM golang:alpine AS build
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-w" -o sleep

FROM scratch
WORKDIR /app
COPY --from=build /app/sleep /app/sleep
EXPOSE 8081
ENTRYPOINT ["/app/sleep"]
