let cartoons = [{
  name:"Post-Graduate Depression",
}, {
  name:"Financial Hardships",
}, {
  name:"Loss of Motivation",
}, {
  name:"Student Loan Debt",
}, {
  name:"Family/Friend Life Comparasion",
}, {
  name:"Finding a job relating to you ",
}];


let randomIndex;
let counter =0;
let animating= false;
let tickets= [];
let imageCounter= 0;
let bg;

function preload(){
  bg = loadImage("assets/chalkboard.jpg");
  for (let i=0; i <=7; i++){
    tickets[i] = loadImage("assets/ticket_"  + i + ".jpg")
  }
}

function setup() {
  clear();
  createCanvas(800, 800);
  image(bg,0,0);
  //background(200);
  textSize(32);
  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  imageMode(CENTER);
  frameRate(8);

text("The Game of Life: ", 375, 300);
text("Choose your stresser after college", 400, 400);
//console.log(tickets);


}

function draw() {
  if (animating == true){
    clear();
  image(tickets[imageCounter], width/2 , height/2 );

  if (imageCounter < tickets.length - 1){
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter= 0;
 }
}
}



function randomizer(){
  animating= false;
  if (cartoons[0]) {
  //this displays random name and splices it out of array
  //background(random(200, 255));

  randomIndex= int(random(cartoons.length));
    image(random(tickets), width/2 , height/2 );
     text(`${cartoons[randomIndex].name}`, 400,400);
  cartoons.splice(randomIndex, 1);
//} else {
  //background(random(200, 255));
  //text("nothing left", 50, 50);
  }

}

function mousePressed(){
  animating= true;
setTimeout(randomizer, 2000);

}
