status="";
function preload(){

}
function setup(){
canvas=createCanvas(300,300);
canvas.position(530,260);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0,0, 300,300);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Object Detecting";
    var input=document.getElementById("input_1").value;
}
function modelLoaded(){
    console.log('model loaded');
    status=true;
}