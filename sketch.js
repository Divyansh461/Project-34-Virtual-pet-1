//Create variables here
var dogimg,happydogimg;
var dog;
var database;
var foods,foodstock;



function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(800,600);
  dog = createSprite(300,400,20,20);
  
  dog.scale = 0.3;

  database = firebase.database();
  var foodstock = database.ref("Food");
  foodstock.on("value",readstock);


}


function draw() {  

background(46,139,87);




if(keyWentDown(UP_ARROW)) {
  writestock(foods);
  dog.addImage(happydogimg);
 
}


  drawSprites();
  //add styles here

 textSize(20);
 fill("white");
 stroke(4);
 text("NOTE : PRESS UP_ARROW KEY TO FEED THE DOG",50,30);
 text("FOOD REMAINING : " + foods,250,200); 
}

//function to read values from the database
function readstock(data) {
  foods = data.val();
}

//function to write values in database
function writestock(x) {

if(x <= 0) {
  x = 20 ;
} else{
  x = x - 1;
}

  database.ref('/').update({
    Food:x
  })


}






