# what3emojis-serverless

API built with Amazon Lambda and the <a href="http://serverless.com">Serverless platform</a>

addressOf function returns the three-emoji address of a latitude/longitude

coordOf function returns the latitude/longitude coordinate of a given emoji address

## Installation

```
git clone https://github.com/what3emojis/serverless-api.git
cd serverless-api
npm install geohash-emoji

# edit serverless.yml to change the name of your service

npm install serverless -g
serverless deploy
```
