var page =0;
var popup;
var btn1, btn2, btn3, btn4, btn5, btn6;
var b1x, b1y;
var btxLo, btyLo;
var popx, popy;
var popxLo, popyLo;
var closeX, closeY;
var closebtn;

var closeImage;
var myFont;
var logoFont;
var canvasX = 800;
var canvasY = 650;
var heat = 0;
var ac = 0;
var acHeat = 0;
var trunk = " OFF";
var trunkR = 160;
var trunkG = 160;
var trunkB = 160;
var trunkDirections = "";

var img;
var btnYes, btnNo;
var btnYNX, btnYNY;
var data;
let tripsCoordinates;
var mapPath;

let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const options = {
lat: 37.6571305,
lng: -122.057391,
zoom: 14,
style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}


//sliders
var tempSlider;
var musicSlider;
var boxSlider;
var sliderBG;

//icons/visual variables
var temp;
var music;
var trunkHot;
var trunkCold;
var musicMom;
var musicDad;
var musicSon;
var musicDaughter;
var playlist;
var playlistType;
var play;
var playlistMom;
var playlistDad;
var playlistSon;
var playlistDaughter;
var momPlay = true;
var dadPlay = false;
var daughterPlay = false;
var sonPlay = false;


function preload() {
  temp = loadImage('img/fan.png');
  music = loadImage('img/music.png');
  closeImage = loadImage('img/close.png');
  trunkHot = loadImage('img/trunkhot.png');
  trunkCold = loadImage('img/trunkcold.png');
  myFont = loadFont('assets/Lato/Lato-Light.ttf');
  img = loadImage('assets/navigation.png');
  fontQ = loadFont('assets/Lato/Lato-Regular.ttf');
  mapPath = loadImage('assets/path.png');
  musicDaughter = loadImage('img/family.png');
  musicSon = loadImage('img/family2.png');
  musicMom = loadImage('img/family3.png');
  musicDad = loadImage('img/family4.png');
}

function setup(){
  canvas = createCanvas(canvasX,canvasY);
  // b1x = 70;
  // b1y = 70;
  //
  // btxLo = 100;
  // btyLo = 565;
  //
  // popx = canvasX;
  // popy = 550;
  //
  // popxLo = 0;
  // popyLo = 0;
  //
  // closeX = 70;
  // closeY = 70;

    b1x = 70; b1y = 70;
   btxLo = 100; btyLo = 565;
   popx = 600; popy = 400;
   popxLo = 100; popyLo = 100;
   closeX = 70; closeY = 70;
   btnYNX = 225; btnYNY = 322;
   playlistMom = loadImage('img/play.png');
   playlistDad = loadImage('img/play2.png');
   playlistSon = loadImage('img/play3.png');
   playlistDaughter = loadImage('img/play4.png');
   play = playlistMom;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)

  fill(255);
  rect(0, 600, 800, 720);

  //Create sliders and background for them

  boxSlider = createP('.');
  boxSlider.position(8, canvasY-8, 600, 900);
  boxSlider.style("background-color", "rgb(225, 225, 225)");
  boxSlider.style("color", "rgb(225, 225, 225)");
  boxSlider.style("padding-right", "796px");
  boxSlider.style("padding-bottom", "20px");

  tempSlider = createSlider(58, 85, 65);
  tempSlider.position(325, 658);

  musicSlider = createSlider(0, 30, 10);
  musicSlider.position(517, 658);



}

function draw(){

  clear();
  textFont(myFont);

  noStroke();
  fill(225);
  rect(0, 550, 800, 720);
  fill(255);
  btn1 = image(img, btxLo, btyLo, b1x, b1y);


  //Temperature button and slider value
  btn3 = image(temp, btxLo+200, btyLo, b1x, b1y);
  fill(0);
  textSize(26);
  text(tempSlider.value(), btxLo+300, btyLo+44);
  textSize(11);
  text("Change current temperature", 316, 640);

  //Music button and slider value
  btn5 = image(music, btxLo+400, btyLo, b1x, b1y);
  fill(0);
  textSize(26);
  text(musicSlider.value(), btxLo+500, btyLo+44);
  textSize(11);
  text("Change audio volume", 520, 640);
  fill(255);


    //Welcome page - pick driver and passengers
    if (page == 0){


    }    //back to main

    if (mouseIsPressed && mouseX > btxLo && mouseX < btxLo+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      page = 1;
    } //click button1 for the popup

    if (mouseIsPressed && mouseX > btxLo+100 && mouseX < btxLo+100+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      page = 2;
    } //click button2 for the popup

    if (mouseIsPressed && mouseX > btxLo+200 && mouseX < btxLo+200+b1x && mouseY > btyLo && mouseY < btyLo+b1y){

      page = 3;
    } //click button3 for the popup

    if (mouseIsPressed && mouseX > btxLo+400 && mouseX < btxLo+400+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      page = 5;
    } //click button5 for the popup

    if (mouseIsPressed && mouseX > btnYNX && mouseX < btnYNX+150 && mouseY > btnYNY && mouseY < btnYNY+60){
       page = 7;
     }//pickup Yes

    //Navigation - pick up/go to school
    if(page == 1){
      fill(245);
     drawingContext.shadowBlur =10;
     drawingContext.shadowColor = "gray";
     popup = rect(popxLo, popyLo, popx, popy, 5);
     drawingContext.shadowBlur = 0;
     fill(66, 66, 66);
     textSize(20);
     textFont(fontQ);
     text("Are you on your way to pick up your kid now?", 200, 230);

     drawingContext.shadowBlur =8;
     drawingContext.shadowColor = "lightgray";
     fill(255);
     btnYes = rect(btnYNX, btnYNY, 150, 60, 30);
     btnNo = rect(btnYNX + 205, btnYNY, 150, 60, 30);

     drawingContext.shadowBlur = 0;
     fill(66, 66, 66);
     textSize(22);

     text("Yes", 280, 360);
     text("No", 490, 360);

    } //show the popup1


    if(page == 2){
      popup = rect(popxLo, popyLo, popx, popy);
      fill(10);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
      fill(255);
      image(closeImage, popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup2

    //Temperature - show current temperature and on right side have option to turn on AC/heat in trunk
    if(page == 3){
      fill(245);
      drawingContext.shadowBlur =10;
      drawingContext.shadowColor = "gray";
      popup = rect(popxLo, popyLo, popx, popy);
      drawingContext.shadowBlur = 0;
      //car temperature display
      fill(20);
      textSize(28);
      text("Cabin temperature", 130, 160);
      textSize(100);
      fill(heat, 0, ac);
      text(tempSlider.value(), 180, 300);
      ellipse(310, 230, 15, 15);
      // rect(200, 370, 100, 40, 10);
      // fill(255);
      textSize(18);
      text(acHeat, 204, 396);
      fill(245);
      ellipse(310, 230, 5, 5);

      if (tempSlider.value() < 70) {
          heat = 70;
          ac = 255;
          acHeat = "   AC ON";
      } else if (tempSlider.value() >= 70) {
          ac = 70;
          heat = 255;
          acHeat = "HEAT ON";
      } else {
        ac = 0;
        heat = 0;
        acHeat = 0;
      }


      //trunk display area
      fill(20);
      rect(400, 100, 300, 400);
      textSize(28);
      fill(255);
      text("Trunk temperature", 438, 160);
      fill(trunkR, trunkG, trunkB);
      drawingContext.shadowBlur =8;
      drawingContext.shadowColor = "gray";
      rect(500, 190, 100, 40, 30);
      drawingContext.shadowBlur = 0;
      fill(255);
      textSize(10);
      text(trunkDirections, 484, 246);
      textSize(20);
      text(trunk, 525, 218);
      image(trunkHot, 424, 260, 130, 166);
      image(trunkCold, 560, 260, 130, 166);
      textSize(12);
      fill(255);
      text("Leftovers/takeout", 438, 460);
      text("Groceries", 595, 460);

      if (mouseIsPressed && mouseX > 424 && mouseX < 554 && mouseY > 260 && mouseY < 470) {
        trunkR = 255;
        trunkG = 0;
        trunkB = 70;
        trunk = " HOT";
        trunkDirections = "Press button to default to OFF";
      } else if (mouseIsPressed && mouseX > 560 && mouseX < 690 && mouseY > 260 && mouseY < 470) {
        trunkR = 70;
        trunkG = 0;
        trunkB = 255;
        trunk = "COLD";
        trunkDirections = "Press button to default to OFF";
      }  else if (mouseIsPressed && mouseX > 515 && mouseX < 615 && mouseY > 190 && mouseY < 230) {
        trunkR = 160;
        trunkG = 160;
        trunkB = 160;
        trunk = " OFF";
        trunkDirections = "";
      }


    }


    //Music - show playlists and volume on the side
    if(page == 5){
      fill(245);
      drawingContext.shadowBlur =10;
      drawingContext.shadowColor = "gray";
      popup = rect(popxLo, popyLo, popx, popy);
      drawingContext.shadowBlur = 0;
      fill(10);
      textSize(28);

      if (momPlay) {
        ellipse(155, 195, 76, 76);
      } else {
        noFill();
        ellipse(155, 195, 76, 76);
        fill(10);
      }

      if (dadPlay) {
        ellipse(155, 275, 76, 76);
      } else {
        noFill();
        ellipse(155, 275, 76, 76);
        fill(10);
      }

      if (daughterPlay) {
        ellipse(155, 355, 76, 76);
      } else {
        noFill();
        ellipse(155, 355, 76, 76);
        fill(10);
      }

      if (sonPlay) {
        ellipse(155, 435, 76, 76);
      } else {
        noFill();
        ellipse(155, 435, 76, 76);
        fill(10);
      }

      text("Who's listening?", 310, 145);
      image(musicMom, 120, 160, 70, 70);
      image(musicDad, 120, 240, 70, 70);
      image(musicDaughter, 120, 320, 70, 70);
      image(musicSon, 120, 400, 70, 70);


      image(play, 195, 160, 500, 330);

      if (mouseIsPressed && mouseX > 120 && mouseX < 190 && mouseY > 160 && mouseY < 230) {
        play = playlistMom;
        momPlay = true;
        dadPlay = false;
        daughterPlay = false;
        sonPlay = false;

      } else if (mouseIsPressed && mouseX > 120 && mouseX < 190 && mouseY > 240 && mouseY < 310) {
        play = playlistDad;
        momPlay = false;
        dadPlay = true;
        daughterPlay = false;
        sonPlay = false;

      }  else if (mouseIsPressed && mouseX > 120 && mouseX < 190 && mouseY > 320 && mouseY < 390) {
        play = playlistDaughter;
        momPlay = false;
        dadPlay = false;
        daughterPlay = true;
        sonPlay = false;

      } else if (mouseIsPressed && mouseX > 120 && mouseX < 190 && mouseY > 400 && mouseY < 470) {
        play = playlistSon;
        momPlay = false;
        dadPlay = false;
        daughterPlay = false;
        sonPlay = true;

      }




    } //show the popup5

    if(page == 7){
      frameRate(10);
      image(mapPath, 119, 227);
    }

    if(mouseIsPressed && popxLo + popx - 50 < mouseX  && mouseX < popxLo + popx
    &&  popyLo < mouseY && mouseY < popyLo + 50){
      popup = rect(popxLo, popyLo, popx, popy);
      page = 0;
    }//close the popup


   if(mouseIsPressed && mouseX < width && mouseY < popyLo){
     popup = rect(popxLo, popyLo, popx, popy);
     page = 0;
   }else if(mouseIsPressed && mouseX < popxLo && mouseY < height){
     popup = rect(popxLo, popyLo, popx, popy);
     page = 0;
   }else if(mouseIsPressed && mouseX < width && popyLo+popy< mouseY && mouseY < height -120){
     popup = rect(popxLo, popyLo, popx, popy);
     page = 0;
   }else if(mouseIsPressed && popxLo + popx < mouseX && mouseX < width && mouseY < height -120){
     popup = rect(popxLo, popyLo, popx, popy);
     page = 0;
   }//close the popup


}
