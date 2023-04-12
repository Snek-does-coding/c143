song1=" "
song2=" "
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
    {
        image(video,0,0,600,500);
        canvas = createCanvas(600, 500);
        fill("#ff0000");
        stroke("#ff0000");
        if(scoreLeftWrist = 0.0002)
        {
            circle(leftWristX, leftWristY, 20);
            song2.stop();
            song1.play();
            document.getElementById("song_name").innerHTML = "song 1 is playing"
        }
    }
    
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function modelLoaded()
{
    console.log("PoseNet Is Loaded!")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score left wrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}