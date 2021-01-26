var catImagesitting, catImagestop, catImagesrunning, cat;
var mouseImages, mouse;
var backgroundImg, background1;

function preload() {
    //load the images here
    catImagesitting = loadAnimation("cat1.png");
    catImagesrunning = loadAnimation("cat2.png", "cat3.png");
    catImagestop = loadAnimation("cat4.png");
    mouseImages = loadAnimation("mouse1.png", "mouse2.png", "mouse3.png", "mouse4.png");
    backgroundImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background1 = createSprite(500, 400);
    background1.addImage("back", backgroundImg);

    cat = createSprite(700, 550, 10, 10);
    cat.addAnimation("catissitting",catImagesitting);
    cat.scale = 0.15;

    mouse = createSprite(100, 550);
    mouse.addAnimation("mousy", mouseImages);
    mouse.scale = 0.1;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    cat.depth = background.depth;
    cat.depth = cat.depth + 1;

    text(mouseX + "," + mouseY, 10, 45);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.addAnimation("catStop", catImagestop);
        cat.changeAnimation("catStop", catImagestop);
        cat.velocityX = 0;

    }



    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("catrunning", catImagesrunning);
    cat.changeAnimation("catrunning", catImagesrunning);

  }


}
