
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Define all the variables here

//All the white notes variables
var buttton1;
var buttton2;
var buttton3;
var buttton4;
var buttton5;
var buttton6;
var buttton7;
var buttton8;
var buttton9;
var buttton10;
var buttton11;
var buttton12;
var buttton13;
var buttton14;

//All the black notes variables
var shortButton1;
var shortButton2;
var shortButton3;
var shortButton4;
var shortButton5;
var shortButton6;
var shortButton7;
var shortButton8;
var shortButton9;
var shortButton10;


//All the digital screen variable
var screen;
var line1;
var line2;
var line3;
var line4;
var line5;
var line6;
var line7;
var line8;
var line9;
var line10;
var keyNote;


//All the variables for sounds
var SoundC;
var SoundCc;
var SoundD;
var SoundDd;
var SoundE;
var SoundF;
var SoundFf;
var SoundG;
var SoundGg;
var SoundA;
var SoundAa;
var SoundB;


//All the variables for sound tunes 
var tune1, tune1Sound, tune1Image;
var tune2, tune2Sound, tune2Image;
var tune3, tune3Sound, tune3Image;


// Variables for turning off and on the notes
var note;
var track;
var trackButton;
var trac2k;
var track2Button;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function preload()
{
//load all the images or sounds here
//Sound for white note C of low tune
SoundC = loadSound("C.wav");
SoundCc = loadSound("Cc.wav");
SoundD = loadSound("D.wav");
SoundDd = loadSound("D.wav");
SoundE = loadSound("E.wav");
SoundFf = loadSound("F.wav");
SoundF = loadSound("Ff.wav");
SoundGg = loadSound("Gg.wav");
SoundG = loadSound("G.wav");
SoundAa = loadSound("Aa.wav");
SoundA = loadSound("A.wav");
SoundB = loadSound("B.wav")
// Images and sounds for tune buttons
tune1Sound = loadSound("Tune3.wav");
tune2Sound = loadSound("Tune2.wav");
tune3Sound = loadSound("Tune1.wav");
tune1Image = loadImage("button.png");
tune2Image = loadImage("button.png");
tune3Image = loadImage("button.png");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////









/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setup(){
  //create dimensions for the canvas here
  createCanvas(900,450)

//create all the variables here
//keynote value assigned
keyNote = "#";
// All the white nodes
//Node 1  
buttton1 = createSprite(30+15,120+225,60,240);
buttton1.shapeColor="white";
//Node 2 
buttton2 = createSprite(92+15,120+225,60,240);
buttton2.shapeColor="white";
//Node 3 
buttton3 = createSprite(154+15,120+225,60,240);
buttton3.shapeColor="white";
//Node 4 
buttton4 = createSprite(216+15,120+225,60,240);
buttton4.shapeColor="white";
//Node 5 
buttton5 = createSprite(278+15,120+225,60,240);
buttton5.shapeColor="white";
//Node 6 
buttton6 = createSprite(340+15,120+225,60,240);
buttton6.shapeColor="white";
//Node 7 
buttton7 = createSprite(402+15,120+225,60,240);
buttton7.shapeColor="white";
//Node 8 
buttton8 = createSprite(464+15,120+225,60,240);
buttton8.shapeColor="white";
//Node 9 
buttton9 = createSprite(526+15,120+225,60,240);
buttton9.shapeColor="white";
//Node 10 
buttton10 = createSprite(588+15,120+225,60,240);
buttton10.shapeColor="white";
//Node 11 
buttton11 = createSprite(650+15,120+225,60,240);
buttton11.shapeColor="white";
//Node 12 
buttton12 = createSprite(712+15,120+225,60,240);
buttton12.shapeColor="white";
//Node 13 
buttton13 = createSprite(774+15,120+225,60,240);
buttton13.shapeColor="white";
//Node 14 
buttton14 = createSprite(836+15,120+225,60,240);
buttton14.shapeColor="white";
//All the white notes ends


//All the black notes starts
//Node 1
shortButton1 = createSprite(57+15,90+210,30,150);
shortButton1.shapeColor="#262525";
//Node 2
shortButton2 = createSprite(122+15,90+210,30,150);
shortButton2.shapeColor="#262525";
//Node 3
shortButton3 = createSprite(242+15,90+210,30,150);
shortButton3.shapeColor="#262525";
//Node 4
shortButton4 = createSprite(306+15,90+210,30,150);
shortButton4.shapeColor="#262525";
//Node 5
shortButton5 = createSprite(370+15,90+210,30,150);
shortButton5.shapeColor="#262525";
//Node 6
shortButton6 = createSprite(490+15,90+210,30,150);
shortButton6.shapeColor="#262525";  
//Node 7
shortButton7 = createSprite(556+15,90+210,30,150);
shortButton7.shapeColor="#262525";  
//Node 8
shortButton8 = createSprite(676+15,90+210,30,150);
shortButton8.shapeColor="#262525";  
//Node 9
shortButton9 = createSprite(742+15,90+210,30,150);
shortButton9.shapeColor="#262525";  
//Node 10
shortButton10 = createSprite(806+15,90+210,30,150);
shortButton10.shapeColor="#262525";  
//All the black notes ends

//The screen starts
screen = createSprite(450,107,160,180);
screen.shapeColor="#eaeaea"; 
//line 1 of digital screen
line1 = createSprite(410,60-5,50,3);
line1.shapeColor="black"; 
//line 2 of digital screen
line2 = createSprite(410,73-5,50,3);
line2.shapeColor="black"; 
//line 3 of digital screen
line3 = createSprite(410,86-5,50,3);
line3.shapeColor="black"; 
//line 4 of digital screen
line4 = createSprite(410,99-5,50,3);
line4.shapeColor="black"; 
//line 5 of digital screen
line5 = createSprite(410,112-5,50,3);
line5.shapeColor="black"; 
//line 6 of digital screen
line6 = createSprite(410,130,50,3);
line6.shapeColor="black"; 
//line 7 of digital screen
line7 = createSprite(410,143,50,3);
line7.shapeColor="black"; 
//line 8 of digital screen
line8 = createSprite(410,156,50,3);
line8.shapeColor="black"; 
//line 9 of digital screen
line9 = createSprite(410,169,50,3);
line9.shapeColor="black"; 
//line 10 of digital screen
line10 = createSprite(410,182,50,3);
line10.shapeColor="black"; 
//The screen ends


//All the tune variables starts
tune1 = createSprite(300,50,20,20);
tune1.shapeColor="#D3D3D3";
tune1.addImage(tune1Image);
tune2 = createSprite(300,110,20,20);
tune2.shapeColor="#D3D3D3";
tune2.addImage(tune2Image);
tune3 = createSprite(300,170,20,20);
tune3.shapeColor="#D3D3D3";
tune3.addImage(tune3Image);
//All the tune variables ends here 

//All the note variables of reference starts
/// 0 = off95
note = 0 ;
track = createSprite(75+50,127.5,160,35);
track.shapeColor="#434343";
trackButton = createSprite(125,127.5,150,25);
trackButton.shapeColor = "black";
track2 = createSprite(75+50,82.5,160,35);
track2.shapeColor="#434343";
track2Button = createSprite(125,82.5,150,25);
track2Button.shapeColor = "black";
//All the note variables of reference ends 

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  








/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function draw(){
  //add background color
  background("black");

// call all the variables, functions here



// Function to change notes as per key pressed
//function for button1
if(mousePressedOver(buttton1)){
  keyNote = "C";
  SoundC.play();
  buttton1.shapeColor="#D3D3D3";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button2
if(mousePressedOver(buttton2)){
  keyNote = "D";
  SoundD.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#D3D3D3";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button3
if(mousePressedOver(buttton3)){
  keyNote = "E";
  SoundE.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#D3D3D3";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button4
if(mousePressedOver(buttton4)){
  keyNote = "F";
  SoundF.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#D3D3D3";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button5
if(mousePressedOver(buttton5)){
  keyNote = "G";
  SoundG.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#D3D3D3";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button6
if(mousePressedOver(buttton6)){
  keyNote = "A";
  SoundA.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#D3D3D3";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button7
if(mousePressedOver(buttton7)){
  keyNote = "B";
  SoundB.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#D3D3D3";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button8
if(mousePressedOver(buttton8)){
  keyNote = "C";
  SoundC.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#D3D3D3";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button9
if(mousePressedOver(buttton9)){
  keyNote = "D";
  SoundD.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#D3D3D3";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button10
if(mousePressedOver(buttton10)){
  keyNote = "E";
  SoundE.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#D3D3D3";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button11
if(mousePressedOver(buttton11)){
  keyNote = "F";
  SoundF.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#D3D3D3";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button12
if(mousePressedOver(buttton12)){
  keyNote = "G";
  SoundG.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#D3D3D3";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button13
if(mousePressedOver(buttton13)){
  keyNote = "A";
  SoundA.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#D3D3D3";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for button14
if(mousePressedOver(buttton14)){
  keyNote = "B";
  SoundB.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#D3D3D3";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton1
if(mousePressedOver(shortButton1)){
  keyNote = "C#";
  SoundCc.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";
  
  shortButton1.shapeColor="#000000"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
    
}
//function for shortButton2
if(mousePressedOver(shortButton2)){
  keyNote = "D#";
  SoundDd.play();  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#000000"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton3
if(mousePressedOver(shortButton3)){
  keyNote = "F#";
  SoundFf.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#000000"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton4
if(mousePressedOver(shortButton4)){
  keyNote = "G#";
  SoundGg.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#000000"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton5
if(mousePressedOver(shortButton5)){
  keyNote = "A#";
  SoundAa.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#000000"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton6
if(mousePressedOver(shortButton6)){
  keyNote = "C#";
  SoundCc.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#000000"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton7
if(mousePressedOver(shortButton7)){
  keyNote = "D#";
  SoundDd.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  
  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#000000"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton8
if(mousePressedOver(shortButton8)){
  keyNote = "F#";
  SoundFf.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#000000"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#262525"
}
//function for shortButton9
if(mousePressedOver(shortButton9)){
  keyNote = "G#";
  SoundGg.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#000000"
  shortButton10.shapeColor="#262525"
}
//function for shortButton10
if(mousePressedOver(shortButton10)){
  keyNote = "A#";
  SoundAa.play();
  buttton1.shapeColor="#FFFFFF";
  buttton2.shapeColor="#FFFFFF";
  buttton3.shapeColor="#FFFFFF";
  buttton4.shapeColor="#FFFFFF";
  buttton5.shapeColor="#FFFFFF";
  buttton6.shapeColor="#FFFFFF";
  buttton7.shapeColor="#FFFFFF";
  buttton8.shapeColor="#FFFFFF";
  buttton9.shapeColor="#FFFFFF";
  buttton10.shapeColor="#FFFFFF";
  buttton11.shapeColor="#FFFFFF";
  buttton12.shapeColor="#FFFFFF";
  buttton13.shapeColor="#FFFFFF";
  buttton14.shapeColor="#FFFFFF";

  shortButton1.shapeColor="#262525"
  shortButton2.shapeColor="#262525"
  shortButton3.shapeColor="#262525"
  shortButton4.shapeColor="#262525"
  shortButton5.shapeColor="#262525"
  shortButton6.shapeColor="#262525"
  shortButton7.shapeColor="#262525"
  shortButton8.shapeColor="#262525"
  shortButton9.shapeColor="#262525"
  shortButton10.shapeColor="#000000"
}
// Function to change notes as per key pressed ends


//Functions for tune buttons starts
if(mousePressedOver(tune1)){
   tune1Sound.play();
}
if(mousePressedOver(tune2)){
  tune2Sound.play();
}
if(mousePressedOver(tune3)){
  tune3Sound.play();
}
//Functions for tune buttons ends

if(mousePressedOver(track2) || mousePressedOver(track2Button) && note === 0){
note = 1;
}

if(mousePressedOver(track) || mousePressedOver(trackButton) && note === 1){
  note = 0;
  }




// to draw sprites
drawSprites();

//Write all the coding for text here

textSize(25 );
fill("black");
textFont("IMPACT");
text(keyNote,470,80);
textSize(17 );
fill("black");
textFont("monoscope");
text("Melody",462,180);
textSize(45 );
fill("black");
textFont("impact");
text("00",460,160);

fill("white");
textSize(20);
textFont("ink free");

text("Show note names",54,87) 
text("Hide note names",57,133) 







if(note === 0){
}
else if(note === 1){  
  
textFont("mistral regular");
// Notes
//black key notes
fill("white");
textSize(23);
textFont('ink free');
text("C#",59,350)  
text("D#",123.5,350)  
text("F#",243.3,350)  
textSize(21);
text("G#",306,350)
textSize(23); 
text("A#",372,350)    
text("C#",435+58,350)  
text("D#",435+123,350)  
text("F#",435+243.5,350)
textSize(21);  
text("G#",435+307,350)
textSize(23); 
text("A#",435+372,350)  
//white key notes
fill("black");
textSize(22);
textFont("ink free ");
text("C",40,440) 
text("D",100,440)  
text("E",160,440) 
text("F",224,440)  
text("G",284,440) 
text("A",346,440)  
text("B",408,440) 
text("C",435+40,440) 
text("D",435+100,440)  
text("E",435+160,440) 
text("F",435+224,440)  
text("G",435+284,440) 
text("A",435+346,440)  
text("B",435+408,440) 

}



}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////







//make all the functions here