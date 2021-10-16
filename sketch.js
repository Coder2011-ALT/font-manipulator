let leftWristX;
let rightWristX;
let noseX;
let noseY;
let difference;
function setup() {
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  video = createCapture(VIDEO);
  video.size(550, 500);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("model loaded");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("left wrist x " + leftWristX + " right wrist x " + rightWristX);
    console.log("nose x " + noseX + "nose y " + noseY);
    difference = floor(leftWristX - rightWristX);
  }
}

function draw() {
  background("#FF6347");
  textSize(difference);
  fill("#98FB98");
  text("Gyanesh", noseX, noseY);
}
