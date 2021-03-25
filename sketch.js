var canvas;
var music;
 var block1,block2,block3,block4
 var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  block1 = createSprite(0,550,340,30);
  block1.shapecolor = "green";

  
  block2 = createSprite(290,550,200,30);
  block2.shapecolor = "yellow";


  block3 = createSprite(510,550,200,30);
  block3.shapecolor = "purple";


  block4 = createSprite(720,550,210,30);
  block4.shapecolor = "blue";

    //create 4 different surfaces

 ball = createSprite(random(20,750),100,30,30);
 ball.shapecolor = "red";
 ball.velocityX = 3;
 ball.velocityY =8;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges=createEdgeSprites();
     ball.bounceOff(edges); 
     if(block1.isTouching(ball) && ball.bounceOff(block1)){
     ball.shapeColor = rgb(0,0,255);
      music.play();
    } if(block2.isTouching(ball)){ 
     ball.shapeColor = rgb(255,128,0);
      ball.velocityX = 0;
       ball.velocityY = 0;
        music.stop();
    } if(block3.isTouching(ball) && ball.bounceOff(block3)){ 
    ball.shapeColor = rgb(153,0,76); 
    } if(block4.isTouching(ball) && ball.bounceOff(block4)){ 
    ball.shapeColor = rgb(0,100,0); } 

    
    drawSprites();


    //add condition to check if box touching surface and make it box
}
