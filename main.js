img = "";
status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
    
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult());
}

function gotResult(error, results)
{
   if (error) {
       console.error(error);
   } else 
   {
       console.log(results);
   }
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill ("#FF0000");
    text ("Dog", 40, 65);
    noFill();
    stroke('#FF0000');
    rect(20, 50, 359, 340);

    fill("#FF0000");
    text("Cat", 320, 96);
    noFill();
    stroke("#FF0000");
    rect(300, 80, 300, 300);
}