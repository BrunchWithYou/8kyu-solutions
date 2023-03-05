// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
// Good luck, and stay safe!



// My solution

function mazeRunner(maze, directions) {
    //Declare your var here to find the starting position
    let index
    let row
    
    //These 2 loops will find starting position of 2 then assigns the index and row
    for(let i = 0; i<maze.length; i++){
      for(let j = 0; j<maze[i].length; j++){
        if(maze[i][j]===2){
          index = j
          row = i
        }
      }
    }
    
    //This loops through the directions, checks which direction, then checks if your direction will lead to an array that is out of bounds, then checks if it is not a 1(wall)
    for(let i = 0; i<directions.length; i++){
      //we need to first return Finish to take care of edge case where you have moves leftover
      if(maze[row][index] === 3) return "Finish"
      
      if(directions[i]==='N' && maze[row-1] !== undefined && (maze[row-1][index]!==1)){
        row-=1
      } else if (directions[i]==='E' && maze[row][index+1] !== undefined && (maze[row][index+1]!==1)){
        index+=1
      } else if (directions[i]==='S' && maze[row+1] !== undefined && (maze[row+1][index]!==1)){
        row+=1
        console.log(row,index, maze[row][index])
      } else if (directions[i]==='W' && maze[row][index-1] !== undefined && (maze[row][index-1]!==1)){
        index-=1
      } else return 'Dead'
      //return Dead at the end if none of the conditions have been met
    }
    
    //this last if statement will run if all directions have been completed
    if(maze[row][index] === 3){
      return 'Finish'
    } else return 'Lost'
  }