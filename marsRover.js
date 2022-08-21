class MarsRover {
  directions = ["NORTH", "EAST", "SOUTH", "WEST"]; //array arranged in the rotate right direction
  tempX = 0;
  tempY = 0;
  index = 0;
  obstacle = "";
  constructor(x, y, direction,obstacles="") {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.obstacles=obstacles;
  }

  rotateLeft() {
    //check if the index is the North's direction index
    if (this.index === 0) {
      //adjusting the index of the array to the last element's index which is West as it's the left of North
      this.index = this.directions.length - 1;
    } else {
      //reduce the index by one as it goes in the opposite direction of the array arrangment
      this.index--;
    }
    this.direction = this.directions[this.index];
  }
  rotateRight() {
    //check if the index is the last element index
    if (this.index === this.directions.length - 1) {
      //adjust the index to the beginning of the array
      this.index = 0;
    } else {
      this.index++;
    }
    this.direction = this.directions[this.index];
  }

  checkObstacles() {
    for (let i in this.obstacles) {
      if (this.x == this.obstacles[i][0] && this.y == this.obstacles[i][1]) {
        throw new Error("Obstacle Found");
      }
    }

    this.tempY = this.y; //save last index of Y incase of obstacle found in the next move
    this.tempX = this.x; //save last index of X incase of obstacle found in the next move
  }

  moveForward() {

    this.checkObstacles(); //check if there is obstacle
    
    if (this.direction === "NORTH") {
      this.y++;
    } else if (this.direction === "WEST") {
      this.x--;
    } else if (this.direction === "SOUTH") {
      this.y--;
    } else if (this.direction === "EAST") {
      this.x++;
    }
  }
  moveBackward() {
    this.checkObstacles();
   
    if (this.direction === "NORTH") {
      this.y--;
    } else if (this.direction === "WEST") {
      this.x++;
    } else if (this.direction === "SOUTH") {
      this.y++;
    } else if (this.direction === "EAST") {
      this.x--;
    }
  }
  getDirectionIndex() {
    this.index = this.directions.indexOf(this.direction);
  }
  move(commands) {
    try {
      this.getDirectionIndex();
      
      for (let i in commands) {
        if (commands[i] === "F") {
          this.moveForward();
        } else if (commands[i] === "B") {
          this.moveBackward();
        } else if (commands[i] === "L") {
          this.rotateLeft();
        } else if (commands[i] === "R") {
          this.rotateRight();
        }
      }
    } catch (e) { //catch the obstacle error
      this.obstacle = "STOPPED";
      this.y = this.tempY; //get the last value of Y before the obstacle was found
      this.x = this.tempX; //get the last value of X before the obstacle was found
    }
  }

  static getMarsRover = async (req, res) => {

    let coordinates = req.body.currentCoordinates;
    coordinates = coordinates.slice(1, coordinates.length - 1); //removing the () bractes 
    coordinates = coordinates.split(",");
    const x = coordinates[0];
    const y = coordinates[1];
    const direction = coordinates[2];

    const command = req.body.command;
    const obstacles=req.body.obstacles;

    let rover = new MarsRover(x, y, direction,obstacles);
    rover.move(command);
    const currentCommand = obstacles!="" ? `(${rover.x},${rover.y}) ${rover.direction} ${rover.obstacle}`
     : `(${rover.x},${rover.y}) ${rover.direction}`; //output the result in the required format

    try {
      res.status(200).send({
        apiStatus: true,
        data: currentCommand,
        message: "successful",
      });
    } catch (e) {
      res.status(500).send({ apiStatus: false, error: e, message: e.message });
    }
  };
}

module.exports = MarsRover;
