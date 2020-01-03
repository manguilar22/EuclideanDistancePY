FROM golang:latest

ENV GO111MODULE on
EXPOSE 8000


WORKDIR /go/src/app
COPY . .

RUN go mod download

ENTRYPOINT [ "go", "run", "main.go" ]
