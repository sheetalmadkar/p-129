song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRighttWrist=0;

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    poseNet=ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreRighttWrist= results[0].pose.keypoints[10].score;
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
    leftWristX=results[0].pose.leftWristX.x;
    leftWristY=results[0].pose.leftWristY.y;
    console.log("righttWristX" + rightWristX + "rightWristY" + rightWristY + "leftWristX" + leftWristX + "leftWristY" + leftWristY);

    rightWristX=results[0].pose.rightWristX.x;
    rightWristY=results[0].pose.rightWristY.y;
    console.log("rightWristX" + rightWristX + "rightWristY" + rightWristY);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}