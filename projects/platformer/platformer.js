$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

     for (let i = 100; i < canvas.width; i += 100) {
       createPlatform(i, canvas.height, -1, -canvas.height);
     }
     for (let i = 100; i < canvas.height; i += 100) {
       createPlatform(canvas.width, i, -canvas.width, -1);
     }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(60,99,5,600)
    
    createPlatform(60,700,80,60)
    createPlatform(170,600,80,50)
    createPlatform(300,500,80,50)
    createPlatform(400,400,80,60)
    createPlatform(605,500,100,60)
    createPlatform(100,300,100,60)
    createPlatform(800,600,100,60)
    createPlatform(930,400,100,60)
    
    


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('gold', 300,300, 0.1, 1)
    createCollectable('database',400,300, 0.01,1)
    createCollectable('gold',600, 400, 1,1)
    createCollectable('gold',100,,300,0.1)
  
  
  




    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('top', 100, 2000, 30, 10)
    createCannon('top', 400, 2000, 20, 10)
    createCannon('bottom',300, 3000, 20,10)
    createCannon('bottom', 600, 2000, 20, 10)
    createCannon('top', 900, 2000, 20, 10)



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
