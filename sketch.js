var charecterrun,charecterrun1,charecterrun2,charecterrun3,charecterrun4,charecterrun5;
var backgroundimg,backgroundimg2;
function preload(){
backgroungimg = loadImage('images/12.jpg');
backgorundimg2 = loadImage('images/Main.jpg');
charecterrun = loadAnimation('images/Run 1.jpg','images/Run 2.jpg','images/run 3.jpg','images/run 4.jpg','images/run 5.jpg');
}
function setup(){
    createCanvas(1500,600);
    charecterrun1=createSprite(50,465,50,50);
    charecterrun1.addAnimation('running',charecterrun);
}
function draw(){
background(backgroungimg);
    drawSprites();
}
function keyPressed(){
    if(keyCode === 39){
        charecterrun1.addAnimation('running',charecterrun);
charecterrun1.x=charecterrun1.x+30;   
    }   
 }