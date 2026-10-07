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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    // TODO 2 - Create Platforms
    createPlatform(500, 400, 20, 170);
    createPlatform(500, 400, 790, 20);
    createPlatform(300, 690, 1100, 50);
    createPlatform(100, 560, 130, 20);
    createPlatform(100, 100, 20, 460);
    createPlatform(400, 280, 20, 460);
    createPlatform(290, 440, 130, 20);
    createPlatform(100, 320, 130, 20);
    createPlatform(420, 280, 100, 20);
    createPlatform(1180, 160, 20, 240);
    createPlatform(1050, 610, 100, 20);
    createPlatform(1220, 520, 100, 20);
    createPlatform(1300, 290, 100, 20);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 1180, 50, 0.5, 1);
    createCollectable("diamond", 600, 500, 0.5, 1);
    createCollectable("diamond", 140, 120, 0.5, 1);
    // TODO 4 - Create Cannons
    createCannon("top", 320, 1000);
    createCannon("bottom", 800, 800);
    createCannon("right", 120, 1200);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
