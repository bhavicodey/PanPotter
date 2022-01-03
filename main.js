Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses)
}

function preload(){
    Peter_pan_song = loadSound("");
    Harry_potter_theme_song = loadSound("");
}

function draw(){
    image(video,0,0,600,530);
}

function modelLoaded(){
    console.log("poseNet is initalized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
         
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist.y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist.x+" rightWrist_y = "+rightWrist.y);
    }
}