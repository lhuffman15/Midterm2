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
  data = loadJSON('data/taxiday1.geojson');
  mapPath = loadImage('assets/path.png');

}


function setup(){
  canvas = createCanvas(800,720);

  b1x = 70; b1y = 70;
  btxLo = 80; btyLo = 625;
  popx = 600; popy = 400;
  popxLo = 100; popyLo = 100;
  closeX = 70; closeY = 70;
  btnYNX = 225; btnYNY = 322;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)

  tripsCoordinates = myMap.geoJSON(data, "LineString");


}


function draw(){

  clear();
  noStroke();

  //map
  const nigeria = myMap.latLngToPixel(37.6571305, -122.057391);


  //deck on the screen
  fill(48, 48, 48);
  rect(0, 600, 800, 720);
  fill(255);
  btn1 = image(img, btxLo, btyLo, b1x, b1y);
  btn2 = rect(btxLo+100, btyLo, b1x, b1y);
  btn3 = rect(btxLo+200, btyLo, b1x, b1y);
  btn4 = rect(btxLo+300, btyLo, b1x, b1y);
  btn5 = rect(btxLo+400, btyLo, b1x, b1y);
  btn6 = rect(btxLo+500, btyLo, b1x, b1y);



//Welcome page - pick driver and passengers
    if (page == 0){
    }    //back to main

    if (mouseIsPressed && mouseX > btxLo && mouseX < btxLo+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      page = 1;
    } //click button1 for the popup

    if (mouseIsPressed && mouseX > btxLo+100 && mouseX < btxLo+100+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      page = 2;
    } //click button2 for the popup

    if (mouseIsPressed && mouseX > btxLo+200 && mouseX < btxLo+200+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      btn2 = rect(btxLo+200, btyLo, b1x, b1y);
      page = 3;
    } //click button3 for the popup

    if (mouseIsPressed && mouseX > btxLo+300 && mouseX < btxLo+300+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      btn2 = rect(btxLo+300, btyLo, b1x, b1y);
      page = 4;
    } //click button4 for the popup

    if (mouseIsPressed && mouseX > btxLo+400 && mouseX < btxLo+400+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      btn2 = rect(btxLo+400, btyLo, b1x, b1y);
      page = 5;
    } //click button5 for the popup

    if (mouseIsPressed && mouseX > btxLo+500 && mouseX < btxLo+500+b1x && mouseY > btyLo && mouseY < btyLo+b1y){
      btn2 = rect(btxLo+500, btyLo, b1x, b1y);
      page = 6;
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
      textFont(fontQ);
      text("Are you going to pick up your kid now?", 200, 230);

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

      // closebtn = rect(popxLo + popx - 50, popyLo, 50, 50, 5);
    } //show the popup1

    //Temperature - show current temperature and on right side have option to turn on AC/heat in trunk
    if(page == 2){
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup2

    //Temp Up and down - effect a number
    if(page == 3){
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup3

    //Music - show playlists and volume on the side
    if(page == 4){
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup4

    //Volume up and down - effects a number
    if(page == 5){
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup5

    if(page == 6){
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup6

    if(page == 7){
      frameRate(10);
      image(mapPath, 119, 227);
    }

    function drawPoints(){
      clear()
      noStroke();
      fill(255);
      for(var i = 0; i < allCoordinates.length; i++){
        var pos = myMap2.latLngToPixel(allCoordinates[i][1], allCoordinates[i][0])
        ellipse(pos.x, pos.y, 5, 5);
      }
    }

    // This functions draws a line with n-vertices where n = visited routes;
    function drawRoute(){
      clear();
      // stroke color and width to see the route line
      stroke(255,0,0, 40);
      strokeWeight(5);
      if(visitedRoutes.length > 0){
        noFill();
        beginShape();
        visitedRoutes.forEach(function (e) {
            var pos = myMap2.latLngToPixel(e[1], e[0]);
            vertex(pos.x, pos.y);
        })
        endShape()
      }
    }

    if(mouseIsPressed && mouseX < width && mouseY < popyLo){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      page = 0;
    }else if(mouseIsPressed && mouseX < popxLo && mouseY < height){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      page = 0;
    }else if(mouseIsPressed && mouseX < width && popyLo+popy< mouseY && mouseY < height -120){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      page = 0;
    }else if(mouseIsPressed && popxLo + popx < mouseX && mouseX < width && mouseY < height -120){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      page = 0;
    }//close the popup

}
