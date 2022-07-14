noseX=0;
noseY=0;
difference=0;
leftwrist=0;
rightwrist=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(650, 600);
    canvas=createCanvas(650, 600)
    canvas.position(800, 100)

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}

function modelloaded(){
    console.log("model is loaded");
}

function gotposes(results){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    leftwrist=results[0].pose.leftWrist.x;
    rightwrist=results[0].pose.rightWrist.x;

    difference = floor(leftwrist-rightwrist);
}

function draw() {
    background("#70dbc8");
    stroke("#4356a8");
    fill("#4021bf");
    document.getElementById("sq").innerHTML="lenght of sqaure = " + difference + "px"  ;
    square(noseX, noseY, difference);
    



}

