# google-maps
Google maps with React and Express

# dev deployment

## Prerequisites
node, npm, docker, docker-compose

## google apki key
``cp ./client/src/app-parameters.dist.ts ./client/src/app-parameters.ts``  
add google map apki key

## postgres 
docker setup  
``sh compose.sh dev``  
or set up pg using config in server/knexfile.ts

## server
``npm --prefix ./server/ i && npm --prefix ./server/ run start-dev``

## client
``npm --prefix ./client/ i && npm --prefix ./client/ run start``
