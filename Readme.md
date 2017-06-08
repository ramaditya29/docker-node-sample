***Commands that can be used to build the image using dockerfile***

docker build -t dockerhub-username/container-name .


***Command that can be used to run the container after generating image from dockerfile***

docker run -p 3000:3000 dockerhub-username/container-name



***Pushing this docker image to dockerhub***

-->First we need to login using docker credentials

docker login


docker push dockerhub-username/container-name


***After Pushing the image to docker. Deploying the docker image to AWS Elastic BeanStalk***

Requirements:
1.Dockerrun.aws.json


The AWS ElasticBeanStalk will read this file when we are creating an environment inside the ElasticBeanStalk application. We need to upload the json file there.


Dockerrun.aws.json : This is the file where we will specify all the configuration details related to the docker. Image name, volumnes, port, logging and various other options
