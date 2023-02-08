import kaboom from "kaboom"

kaboom(
  //{ width: 720, height: 1280, }
)

loadSprite("evan", "sprites/Evanhead.png")
loadSprite("floor", "sprites/floor.png")

// It's a Big head (THE FILE OFC)

// Player

scene("game", () => {

  const player = add([
    sprite("evan"),
    pos(80, 40),
    scale(.3),
    area(),
    body(),
  ]);


  //platform

  function spawnFloor() {
    add([
      sprite("floor"),
      pos(0, 200),
      scale(3.1),
      area(),
      solid(),
      move(LEFT, 240),
    ]);
    wait(1.9, () => {
      spawnFloor();
    });
  }

  spawnFloor();


  // .jump() when "space" key is pressed
  onClick(() => {
    if (player.isFalling()) {
      player.jump()
    }
  })



  // obstacles

  function spawnObstacle() {
    add([
      rect(64, rand(100, 200)),
      area(),
      outline(4),
      pos(width(), height() - 48),
      origin("botleft"),
      color(255, 180, 255),
      move(LEFT, 240),
      "tree",
    ]);
    wait(rand(0.5, 1.5), () => {
      spawnObstacle();
    });
  }

  spawnObstacle();
  /*
    evan.onCollide("tree", () => {
      shake();
    });
  */



  function MoveFloor() {
    const Floor = add([
      sprite("evan"),
      pos(80, 40),
    ])

  }
});

go("game"
