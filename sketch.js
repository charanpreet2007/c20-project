var bgimg
var catsitting ,  catmovingimg ,happycat,mousedancing,mousecat,mousesitting,mousedimg
var canvas

function preload() {
    //load the images here
    bgimg = loadImage ("images/garden.png")
    catsittingimg = loadAnimation("images/cat1.png")
    catmovingimg = loadAnimation("images/cat2.png","images/cat3.png")
    happycat = loadAnimation("images/cat4.png")
  mousesittingimg = loadAnimation("images/mouse1.png")
 mousedimg = loadAnimation ("images/mouse2.png","images/mouse3.png")
    mousecat = loadAnimation ("images/mouse4.png")
}

function setup(){
 canvas = createCanvas(1000,800);
    //create tom and jerry sprites here

    mouse = createSprite(200,600)
    mouse.addAnimation("mousesitting",mousesittingimg)
    mouse.scale= 0.15
             
   cat = createSprite(870,600)
   cat.addAnimation("catsitting",catsittingimg)
   cat.scale = 0.2
}

function draw() {

    background(bgimg);
 

    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width-mouse.width)/2) {

    cat.velocityX=0;
    cat.addAnimation("catLastImage", happycat);
    cat.x =300;
    cat.scale=0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage", mousecat);
    mouse.scale=0.15;
    mouse.changeAnimation("mouseLastImage");

}
    drawSprites();
}

function keyPressed(){

    if (keyCode === LEFT_ARROW){

        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catmovingimg );
        cat.changeAnimation("catRunning");


mouse.addAnimation("mouseteasing",mousedimg)
mouse.changeAnimation("mouseteasing")
mouse.frameDelay = 25



}


}

