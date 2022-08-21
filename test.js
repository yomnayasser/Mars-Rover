const rover = require("./controller/marsRover");
const expect = require("chai").expect;

describe("Mars Rover", () => {
  describe("Implement commands that move the rover forward", () => {
    it("should increase X when moving EAST", () => {
      const roverTest = new rover(4, 2, "EAST");
      roverTest.move("F");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(5,2) EAST"
      );
    });

    it("should increase Y when moving NORTH", () => {
      const roverTest = new rover(1, 3, "NORTH");
      roverTest.move("F");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(1,4) NORTH"
      );
    });

    it("should decrease Y when moving SOUTH", () => {
      const roverTest = new rover(4, 0, "SOUTH");
      roverTest.move("F");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,-1) SOUTH"
      );
    });

    it("should decrease X when moving WEST", () => {
      const roverTest = new rover(4, 2, "WEST");
      roverTest.move("F");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(3,2) WEST"
      );
    });
  });

  describe("Implement commands that move the rover backward", () => {
    it("should decrease X when moving EAST", () => {
      const roverTest = new rover(4, 2, "EAST");
      roverTest.move("B");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(3,2) EAST"
      );
    });

    it("should decrease Y when moving NORTH", () => {
      const roverTest = new rover(1, 3, "NORTH");
      roverTest.move("B");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(1,2) NORTH"
      );
    });

    it("should increase Y when moving SOUTH", () => {
      const roverTest = new rover(4, 0, "SOUTH");
      roverTest.move("B");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,1) SOUTH"
      );
    });

    it("should increase X when moving WEST", () => {
      const roverTest = new rover(4, 2, "WEST");
      roverTest.move("B");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(5,2) WEST"
      );
    });
  });

  describe("Implement commands that Spin to the right", () => {
    it("the direction should be EAST", () => {
      const roverTest = new rover(4, 2, "NORTH");
      roverTest.move("R");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) EAST"
      );
    });
    it("the direction should be SOUTH", () => {
      const roverTest = new rover(4, 2, "EAST");
      roverTest.move("R");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) SOUTH"
      );
    });
    it("the direction should be WEST", () => {
      const roverTest = new rover(4, 2, "SOUTH");
      roverTest.move("R");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) WEST"
      );
    });
    it("the direction should be NORTH", () => {
      const roverTest = new rover(4, 2, "WEST");
      roverTest.move("R");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) NORTH"
      );
    });
  });

  describe("Implement commands that Spin to the left", () => {
    it("the direction should be WEST", () => {
      const roverTest = new rover(4, 2, "NORTH");
      roverTest.move("L");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) WEST"
      );
    });
    it("the direction should be SOUTH", () => {
      const roverTest = new rover(4, 2, "WEST");
      roverTest.move("L");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) SOUTH"
      );
    });
    it("the direction should be EAST", () => {
      const roverTest = new rover(4, 2, "SOUTH");
      roverTest.move("L");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) EAST"
      );
    });
    it("the direction should be NORTH", () => {
      const roverTest = new rover(4, 2, "EAST");
      roverTest.move("L");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(4,2) NORTH"
      );
    });
  });

  describe("Implement commands with mixed directions", () => {
    it("the values of x,y and direction should be 6,4 and NORTH", () => {
      const roverTest = new rover(4, 2, "EAST");
      roverTest.move("FLFFFRFLB");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(6,4) NORTH"
      );
    });
    
    it("the values of x,y and direction should be 1,3 and NORTH", () => {
      const roverTest = new rover(1, 2, "NORTH");
      roverTest.move("LFLFLFLFF");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(1,3) NORTH"
      );
    });

    it("the values of x,y and direction should be 5,1 and EAST", () => {
      const roverTest = new rover(3, 3, "EAST");
      roverTest.move("FFRFFRFRRF");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction}`).equal(
        "(5,1) EAST"
      );
    });
  });

  describe("Implement commands with obstacles presents", () => {
    it("the values of x,y and direction should be 6,4 and NORTH", () => {
      const roverTest = new rover(0, 0, "EAST",[[3,0]]);
      roverTest.move("FFFLF");
      expect(`(${roverTest.x},${roverTest.y}) ${roverTest.direction} ${roverTest.obstacle}`).equal(
        "(2,0) NORTH STOPPED"
      );
    });
  });
});
