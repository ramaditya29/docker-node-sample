***Commands that can be used to build the image using dockerfile***

docker build -t dockerhub-username/container-name .


***Command that can be used to run the container after generating image from dockerfile***

docker run -p 3000:3000 dockerhub-username/container-name



***Pushing this docker image to dockerhub***

-->First we need to login using docker credentials

docker login


docker push dockerhub-username/container-name
