var page =0;
var popup;
var btn1, btn2, btn3, btn4, btn5, btn6;
var b1x, b1y;
var btxLo, btyLo;
var popx, popy;
var popxLo, popyLo;
var closeX, closeY;
var closebtn;



function setup(){
  createCanvas(800,720);
  b1x = 70;
  b1y = 70;

  btxLo = 100;
  btyLo = 600;

  popx = 600;
  popy = 400;

  popxLo = 100;
  popyLo = 100;

  closeX = 70;
  closeY = 70;

}

function draw(){
  background(200);

    if (page == 0){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      btn3 = rect(btxLo+200, btyLo, b1x, b1y);
      btn4 = rect(btxLo+300, btyLo, b1x, b1y);
      btn5 = rect(btxLo+400, btyLo, b1x, b1y);
      btn6 = rect(btxLo+500, btyLo, b1x, b1y);

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

    if(page == 1){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      btn3 = rect(btxLo+200, btyLo, b1x, b1y);
      btn4 = rect(btxLo+300, btyLo, b1x, b1y);
      btn5 = rect(btxLo+400, btyLo, b1x, b1y);
      btn6 = rect(btxLo+500, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup1

    if(page == 2){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      btn3 = rect(btxLo+200, btyLo, b1x, b1y);
      btn4 = rect(btxLo+300, btyLo, b1x, b1y);
      btn5 = rect(btxLo+400, btyLo, b1x, b1y);
      btn6 = rect(btxLo+500, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup2

    if(page == 3){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      btn3 = rect(btxLo+200, btyLo, b1x, b1y);
      btn4 = rect(btxLo+300, btyLo, b1x, b1y);
      btn5 = rect(btxLo+400, btyLo, b1x, b1y);
      btn6 = rect(btxLo+500, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup3

    if(page == 4){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      btn3 = rect(btxLo+200, btyLo, b1x, b1y);
      btn4 = rect(btxLo+300, btyLo, b1x, b1y);
      btn5 = rect(btxLo+400, btyLo, b1x, b1y);
      btn6 = rect(btxLo+500, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup4

    if(page == 5){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      btn3 = rect(btxLo+200, btyLo, b1x, b1y);
      btn4 = rect(btxLo+300, btyLo, b1x, b1y);
      btn5 = rect(btxLo+400, btyLo, b1x, b1y);
      btn6 = rect(btxLo+500, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup5

    if(page == 6){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      btn2 = rect(btxLo+100, btyLo, b1x, b1y);
      btn3 = rect(btxLo+200, btyLo, b1x, b1y);
      btn4 = rect(btxLo+300, btyLo, b1x, b1y);
      btn5 = rect(btxLo+400, btyLo, b1x, b1y);
      btn6 = rect(btxLo+500, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      closebtn = rect(popxLo + popx - 50, popyLo, 50, 50);
    } //show the popup6


    if(mouseIsPressed && popxLo + popx - 50 < mouseX  && mouseX < popxLo + popx
    &&  popyLo < mouseY && mouseY < popyLo + 50){
      btn1 = rect(btxLo, btyLo, b1x, b1y);
      popup = rect(popxLo, popyLo, popx, popy);
      page = 0;
    }//close the popup

}
