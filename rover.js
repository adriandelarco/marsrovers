var RoverA = {
  name: 'RoverA',
  position: [0,0], 
  direction: 'N'
};
var RoverB = {
  name: 'RoverB',
  position: [5,5], 
  direction: 'N'
};

var obstacles = [[7,7],[3,3]];
var obstaclefound = false

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function goForward(rover) {
	var oldposition = JSON.parse(JSON.stringify(rover.position));

	switch(rover.direction) {
		case 'N':
			rover.position[0]++
		break;
		case 'E':
			rover.position[1]++
		break;
		case 'S':
			rover.position[0]--
		break;
		case 'W':
			rover.position[1]--
		break;
	};

	if (rover.position[0] > 10) {
		rover.position[0] = 0
	} else if (rover.position[1] > 10) {
		rover.position[1] = 0
	} else if (rover.position[0] < 0) {
		rover.position[0] = 10
	} else if (rover.position[1] < 0) {
		rover.position[1] = 10
	}

	for (var i = 0; i < obstacles.length; i++) {
		if (arraysEqual(rover.position, obstacles[i]) === true ) {
			obstaclefound = true
			rover.position = JSON.parse(JSON.stringify(oldposition));
			console.log (rover.name + " has found an obstacle at " + obstacles[i] +". So he couldn't move, the position is still: " + rover.position);
		}
	}

	if (rover.name === 'RoverA') {
		if (arraysEqual(rover.position, RoverB.position) === true ) {
			obstaclefound = true
			console.log (rover.name + " has collided with " + RoverB.name + " at " + JSON.parse(JSON.stringify(oldposition)) +". So he couldn't move, the position is still: " + rover.position);
			rover.position = JSON.parse(JSON.stringify(oldposition));
		}
	} else {
		if (arraysEqual(rover.position, RoverA.position) === true ) {
			obstaclefound = true
			console.log (rover.name + " has collided with " + RoverA.name + " at " + JSON.parse(JSON.stringify(oldposition)) +". So he couldn't move, the position is still: " + rover.position);
			rover.position = JSON.parse(JSON.stringify(oldposition));
		}
	}
  
  
console.log("New " + rover.name  + " Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBack(rover) {
	var oldposition = JSON.parse(JSON.stringify(rover.position));

	switch(rover.direction) {
	case 'N':
		rover.position[0]--
		break;
	case 'E':
		rover.position[1]--
		break;
	case 'S':
		rover.position[0]++
		break;
	case 'W':
		rover.position[1]++
		break;
	};
	if (rover.position[0] > 10) {
		rover.position[0] = 0
	} else if (rover.position[1] > 10) {
		rover.position[1] = 0
	} else if (rover.position[0] < 0) {
		rover.position[0] = 10
	} else if (rover.position[1] < 0) {
		rover.position[1] = 10
	}

  	for (var i = 0; i < obstacles.length; i++) {
		if (arraysEqual(rover.position, obstacles[i]) === true ) {
			obstaclefound = true
			rover.position = JSON.parse(JSON.stringify(oldposition));
			console.log (rover.name  + " has found an obstacle at " + obstacles[i] +". So he couldn't move, the position is still: " + rover.position);
		}
	}

	if (rover.name === 'RoverA') {
		if (arraysEqual(rover.position, RoverB.position) === true ) {
			obstaclefound = true
			rover.position = JSON.parse(JSON.stringify(oldposition));
			console.log (rover.name + " has collided with " + RoverB.name + " at " + obstacles[i] +". So he couldn't move, the position is still: " + rover.position);
		}
	} else {
		if (arraysEqual(rover.position, RoverA.position) === true ) {
			obstaclefound = true
			rover.position = JSON.parse(JSON.stringify(oldposition));
			console.log (rover.name + " has collided with " + RoverA.name + " at " + obstacles[i] +". So he couldn't move, the position is still: " + rover.position);
		}
	}

  console.log("New " + rover.name  + " Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnRight (rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
  console.log("New direction for " + rover.name  + ": " + rover.direction + ".")
}

function turnLeft (rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
  console.log("New direction for " + rover.name  + ": " + rover.direction + ".")
}

function fastMove (array, rover){

	if (typeof array === 'string') {
		var nowarray = []
	    for (var i = 0; i < array.length; i++) {
	    	nowarray.push (array.charAt(i));
	    }
	    array = nowarray
	}

	for (var i = 0; i < array.length; i++) {
		switch(array[i].toLowerCase()) {
			case 'f':
				goForward(rover);
			break;
			case 'b':
				goBack(rover);
			break;
			case 'r':
				turnRight(rover);
			break;
			case 'l':
				turnLeft(rover);
			break;
			default:
			break;
		}
		if (obstaclefound === true) {obstaclefound = false; return;}
	}
	return console.log ("Fast macro movement executed for " + rover.name)
}

function position (rover){
  console.log(rover.name  + 	" Position: [" + rover.position[0] + ", " + rover.position[1] + "]. Direction: " + rover.direction +".")
}

function newObstacle (position){
	if (typeof array !== 'array') {
		console.log ("You must enter an array to define the new obstacle position. ie. [0,3]")
	}
	obstacles.push (position);
}

position(RoverA);
position(RoverB);