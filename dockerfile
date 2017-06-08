FROM ubuntu:latest
WORKDIR /src
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x 
RUN apt-get install -y nodejs
RUN apt-get install -y npm 

COPY . /src
CMD ["npm","install"]
EXPOSE 3000

CMD ["nodejs" , "server.js"]
