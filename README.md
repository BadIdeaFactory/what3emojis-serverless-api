# what3emojis-serverless

API built with Amazon Lambda, Amazon API Gateway, and the <a href="http://serverless.com">Serverless platform</a>

addressOf function returns the three-emoji address of a latitude/longitude

coordOf function returns the latitude/longitude coordinate of a given emoji address

## Sample request

```
curl --data '{"latitude":10,"longitude":-10}' https://wqoh7k8ad6.execute-api.us-east-1.amazonaws.com/prod

> {"address":"📮🕝🌀","event":{"latitude":10,"longitude":-10}}
```

## Installation

```
git clone https://github.com/what3emojis/serverless-api.git
cd serverless-api
npm install geohash-emoji

# edit serverless.yml to change the name of your service

npm install serverless -g
serverless deploy
```

Set up Amazon API Gateway and create a POST method which calls on AWS Lambda

Enable CORS on the service

Publish the Amazon API Gateway to a named stage
