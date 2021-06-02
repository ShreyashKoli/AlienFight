const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var ship, monster;
var shipImg, monsterImg
var background, bg;
var engine, world;
var health = 200;
var laser;

function preload(){
shipImg = loadImage('Spaceship.png');
bg = loadImage('SpaceBackground.jpg');
monsterImg = loadImage('monster.png');
}


function setup() {
  createCanvas(1200,800);
  ship = createSprite(560, 680, 20, 20);
  ship.addImage(shipImg);
  ship.scale = 0.3;
  monster = createSprite(550,150,10,20);
  monster.addImage(monsterImg);
  monster.scale = 0.3;
  laser = createSprite(ship.x, ship.y,20,40);
}

function draw() {
  background(bg);  
  drawSprites();

  monster.velocityX = 5;

if(keyDown(RIGHT_ARROW)){
  ship.x = ship.x + 5;
}

if(keyDown(LEFT_ARROW)){
  ship.x = ship.x - 5;
}

if(keyDown(UP_ARROW)){
  laser.setVelocityY = 5;
}


}