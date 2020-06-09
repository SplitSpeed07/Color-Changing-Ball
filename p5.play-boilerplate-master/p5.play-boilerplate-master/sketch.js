function setup() {
  createCanvas(400,400);
  ball=createSprite(200, 200, 50, 50);
  moving=createSprite(100, 100, 50, 50);
  ball2=createSprite(150, 150, 50, 50)
 
}

function draw() {
  background("red");  
  drawSprites();
moving.x=mouseX
moving.y=mouseY
if(moving.x-ball.x<moving.width/2+ball.width/2
  && ball.x-moving.x<moving.width/2+ball.width/2
  && moving.y-ball.y<moving.height/2+ball.height/2
  && ball.y-moving.y<moving.height/2+ball.height/2){
    moving.shapeColor="blue"
  }
  if(moving.x-ball2.x<moving.width/2+ball2.width/2
    && ball2.x-moving.x<moving.width/2+ball2.width/2
    && moving.y-ball2.y<moving.height/2+ball2.height/2
    && ball2.y-moving.y<moving.height/2+ball2.height/2){
      moving.shapeColor="green"
    }

}