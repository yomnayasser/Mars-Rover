# Mars-Rover

## Descreption 
I developed an API that translates the commands sent from earth to instructions that are understood by the rover that was sent to explore Mars surface.

## Content
My project includes 3 files.

The first one is the index.js:
I prepred on it the API link which is: http://localhost:3000/marsRover

The second one is marsRover.js:
I put on it all the logic , it include MarsRover class 

The third one is test.js:
The unit test I made is in it

## How to run the API
1- run this command in your terminal:  npm install
2-To run the API I made, open postman and put the link http://localhost:3000/marsRover and make it POST function
and the body has three objects attributs which are 1-currentCoordinates, 2-command , 3-obstacles
example:
{
   "currentCoordinates":"(4,2,EAST)",
   "command":"FLFFFRFLB",
   "obstacles":[]
}

## How to run the unit test
In the project terminal write this command: mocha test
and this will run all of the tests I wrote
