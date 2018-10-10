var page =0;

var popup;
var btn1, btn2, btn3, btn4, btn5, btn6;
var b1x, b1y;
var btxLo, btyLo;
var popx, popy;
var popxLo, popyLo;
var closeX, closeY;
var closebtn;
var img;
var btnYes, btnNo;
var btnYNX, btnYNY;
var data;
let tripsCoordinates;
let myMap;
let canvas;
var mapPath;
var msBubble, msBubble2;
var voicemic;
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

const options = {
lat: 37.6571305,
lng: -122.057391,
zoom: 14,
style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}
const mappa = new Mappa('Leaflet');



function preload(){
  img = loadImage('assets/navigation.png');
  fontQ = loadFont('assets/Lato/Lato-Regular.ttf');
  mapPath = loadImage('assets/path.png');
  msBubble = loadImage('assets/bubble.png');
  msBubble2 = loadImage('assets/bubble2.png');
  voicemic = loadImage('assets/mic.png');
  temp = loadImage('img/fan.png');
  music = loadImage('img/music.png');
  closeImage = loadImage('img/close.png');
  trunkHot = loadImage('img/trunkhot.png');
  trunkCold = loadImage('img/trunkcold.png');
  musicDaughter = loadImage('img/family.png');
  musicSon = loadImage('img/family2.png');
  musicMom = loadImage('img/family3.png');
  musicDad = loadImage('img/family4.png');
  myFont = loadFont('assets/Lato/Lato-Light.ttf');


}


function setup(){
  canvas = createCanvas(canvasX,canvasY);

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


  //Create sliders and background for them

  boxSlider = createP('.');

  boxSlider.position(8, canvasY-8, 600, 900);
  boxSlider.style("background-color", "rgb(36,36,39)");
  boxSlider.style("color", "rgb(225, 225, 225)");
  boxSlider.style("padding-right", "796px");
  boxSlider.style("padding-bottom", "20px");

  tempSlider = createSlider(58, 85, 65);
  tempSlider.position(338, 658);

  musicSlider = createSlider(0, 30, 10);
  musicSlider.position(590, 658);


}


function draw(){

  clear();
  noStroke();

  //map
  //const nigeria = myMap.latLngToPixel(37.6571305, -122.057391);


  fill(0);
  textFont(myFont);

  //deck on the screen
  fill(36,36,39);
  rect(0, 550, canvasX, canvasY);
  fill(255);
  btn1 = image(img, btxLo, btyLo, b1x, b1y);

  //Temperature button and slider value
  btn3 = image(temp, btxLo+150, btyLo, b1x, b1y);
  fill(255);
  textSize(26);
  text(tempSlider.value(), btxLo+280, btyLo+44);
  textSize(14);
  text("Change Temperature", 330, 640);

    //Music button and slider value
    btn5 = image(music, btxLo+410, btyLo, b1x, b1y);
    fill(255);
    textSize(26);
    text(musicSlider.value(), btxLo+530, btyLo+44);
    textSize(14);
    text("Change Volume", 600, 640);
    fill(255);



//Welcome page - pick driver and passengers
    if (page == 0){
    }    //back to main

    if (mouseIsPressed && mouseX > btxLo && mouseX < btxLo+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      page = 1;
    } //click button1 for the popup

    if (mouseIsPressed && mouseX > btxLo+150 && mouseX < btxLo+150+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
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
      fill(255);
      drawingContext.shadowBlur =10;
      drawingContext.shadowColor = "gray";
      popup = rect(popxLo, popyLo, popx, popy, 5);
      drawingContext.shadowBlur = 0;
      fill(66, 66, 66);
      textSize(25);
      //textFont(fontQ);
      text("Are you on your way to pick up your kid now?", 170, 230);

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


      //close the popup
      if(mouseIsPressed && mouseX < canvasX && mouseY < popyLo){ //top
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }else if(mouseIsPressed && mouseX < popxLo && mouseY < canvasY - 100){ //left
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      // }else if(mouseIsPressed && mouseX < canvasX && popyLo+popy< mouseY && mouseY < canvasY - 100){//bottom
      //   btn1 = rect(btxLo, btyLo, b1x, b1y);
      //   popup = rect(popxLo, popyLo, popx, popy);
      //   page = 0;
      }else if(mouseIsPressed && popxLo + popx < mouseX && mouseX < canvasX && mouseY < canvasY - 100){//right
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }

    } //show the popup1


    //Temp Up and down - effect a number
    if(page == 3){
      fill(245);
        drawingContext.shadowBlur =10;
        drawingContext.shadowColor = "gray";
        popup = rect(popxLo, popyLo, popx, popy, 5);
        drawingContext.shadowBlur = 0;
        //car temperature display
        fill(20);
        textSize(28);
        text("Cabin temperature", 135, 160);
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
      rect(400, 100, 300, 400, 0, 5, 5, 0);
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

      //close the popup
      if(mouseIsPressed && mouseX < canvasX && mouseY < popyLo){ //top
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }else if(mouseIsPressed && mouseX < popxLo && mouseY < canvasY - 100){ //left
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }else if(mouseIsPressed && mouseX < canvasX && popyLo+popy< mouseY && mouseY < canvasY - 100){//bottom
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }else if(mouseIsPressed && popxLo + popx < mouseX && mouseX < canvasX && mouseY < canvasY - 100){//right
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }
    } //show the popup3



    //Volume up and down - effects a number
    if(page == 5){
      fill(245);
      drawingContext.shadowBlur =10;
      drawingContext.shadowColor = "gray";
      popup = rect(popxLo, popyLo, popx, popy, 5);
      drawingContext.shadowBlur = 0;
      fill(74,144,226);
      textSize(28);

      if (momPlay) {
        ellipse(155, 195, 76, 76);
      } else {
        noFill();
        ellipse(155, 195, 76, 76);
        fill(74,144,226);
      }

      if (dadPlay) {
        ellipse(155, 275, 76, 76);
      } else {
        noFill();
        ellipse(155, 275, 76, 76);
        fill(74,144,226);
      }

      if (daughterPlay) {
        ellipse(155, 355, 76, 76);
      } else {
        noFill();
        ellipse(155, 355, 76, 76);
        fill(74,144,226);
      }

      if (sonPlay) {
        ellipse(155, 435, 76, 76);
      } else {
        noFill();
        ellipse(155, 435, 76, 76);
        fill(74,144,226);
      }

      fill(0);

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

      //close the popup
      if(mouseIsPressed && mouseX < canvasX && mouseY < popyLo){ //top
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }else if(mouseIsPressed && mouseX < popxLo && mouseY < canvasY - 100){ //left
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }else if(mouseIsPressed && mouseX < canvasX && popyLo+popy< mouseY && mouseY < canvasY - 100){//bottom
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }else if(mouseIsPressed && popxLo + popx < mouseX && mouseX < canvasX && mouseY < canvasY - 100){//right
        btn1 = rect(btxLo, btyLo, b1x, b1y);
        popup = rect(popxLo, popyLo, popx, popy);
        page = 0;
      }
    }



    //picking child page
    if(page == 7){
      image(mapPath, 76, 154);
      //son message
      image(msBubble, 377, 40);
      fill(0);
      textSize(20);
      text("Mom, I am front of the gate!", 410, 100);
      //status bar
      fill(255);
      drawingContext.shadowOffsetY = -2;
      drawingContext.shadowBlur =5;
      drawingContext.shadowColor = "light gray";
      rect(0, 450, 800, 100);
      drawingContext.shadowBlur = 0;
      drawingContext.shadowOffsetY = 0;
      //Time remained
      fill(0);
      text("20 minutes remained", 556, 510);
      fill(255);
      //send message button
      drawingContext.shadowBlur =5;
      drawingContext.shadowColor = "light gray";
      var sendMS = rect(140, 473, 200, 60, 30);
      drawingContext.shadowBlur = 0;
      fill(0);
      text("Send Message", 180, 510);
      //divider
      fill(0);
      rect(500, 480, 1, 40);
    }//track path

    if(mouseIsPressed && mouseX > 140 && mouseX < 140+200 && mouseY > 473 && mouseY < 473+60){
      page = 8;
    }//click for sending message

    if(page == 8){
      image(mapPath, 76, 154);
      //son message
      image(msBubble, 377, 40);
      fill(0);
      textSize(20);
      text("Mom, I am front of the gate!", 410, 100);
      //status bar
      fill(255);
      drawingContext.shadowOffsetY = -2;
      drawingContext.shadowBlur =5;
      drawingContext.shadowColor = "light gray";
      rect(0, 450, 800, 100);
      drawingContext.shadowBlur = 0;
      drawingContext.shadowOffsetY = 0;
      //mic icon
      image(voicemic, 155, 450);
      //mom's message
      fill(0);
      textSize(18);
      text("Okay, I will be there in 20minutes", 250, 510);
      fill(255);
      drawingContext.shadowBlur =5;
      drawingContext.shadowColor = "light gray";
      var sendMS = rect(20, 470, 100, 60, 30);
      drawingContext.shadowBlur = 0;
      //Send button
      fill(0);
      textSize(22);
      text("Send", 47, 510);
      fill(0);
      rect(150, 480, 1, 40);//divider
    }


    //click for sending message
    if(mouseIsPressed && mouseX > 0 && mouseX < 50+100 && mouseY > 470 && mouseY < 522+30){
      page = 9;
    }


    if(page == 9){
      image(mapPath, 76, 154);
      //son message
      image(msBubble, 377, 40);
      fill(0);
      textSize(20);
      text("Mom, I am front of the gate!", 410, 100);
      //moms message
      image(msBubble2, 30, 100);
      text("Okay, I will be there", 60, 140);
      text("in 20minutes.", 60, 175);
      //status bar
      fill(255);
      drawingContext.shadowOffsetY = -2;
      drawingContext.shadowBlur =5;
      drawingContext.shadowColor = "light gray";
      rect(0, 450, 800, 100);
      drawingContext.shadowBlur = 0;
      drawingContext.shadowOffsetY = 0;
      //Time remained
      fill(0);
      text("20 minutes remained", 556, 510);
      fill(255);
      //send message button
      drawingContext.shadowBlur =5;
      drawingContext.shadowColor = "light gray";
      var sendMS = rect(140, 473, 200, 60, 30);
      drawingContext.shadowBlur = 0;
      fill(0);
      text("Send Message", 180, 510);
      //divider
      fill(0);
      rect(500, 480, 1, 40);
    }//track path


}
