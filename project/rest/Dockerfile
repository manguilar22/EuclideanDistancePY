FROM golang:latest

ENV GO111MODULE on
EXPOSE 8000


WORKDIR /go/src/app
COPY . .

ENV PORT 8000

RUN go mod download

ENTRYPOINT [ "go", "run", "main.go" ]
