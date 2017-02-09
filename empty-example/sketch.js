function setup() {
createCanvas(500, 500);
     background('blue');
    //sky

    fill('green');
    noStroke();
    rect(0, 400, 500, 100);
    //ground
}

function draw() {

    noStroke();

   fill(81, 47, 33);
    triangle(200, 240, 300, 240, 250, 135);
    //hair

    fill('yellow');
    triangle(220, 230, 280, 230, 250, 430);
    fill('red');
    triangle(220, 230, 280, 230, 250, 395);
    fill(79, 146, 255);
    triangle(220, 230, 280, 230, 250, 360);
    fill(255);
    triangle(220, 230, 280, 230, 250, 320);
    //fire

    stroke(0);
    fill(192);
    quad(220, 230, 280, 230, 275, 290, 225, 290);
    line(230, 290, 228, 250);
    line(235, 290, 233, 250);
    line(240, 290, 238, 250);
    line(245, 290, 243, 250);
    line(250, 290, 250, 250);
    line(255, 290, 257, 250);
    line(260, 290, 262, 250);
    line(265, 290, 267, 250);
    line(270, 290, 272, 250);

    fill(128);
    rect(220, 220, 60, 30);
    //rocket

    noStroke();
    fill('tan');
    ellipse(250, 190, 80, 115);
    //head


    fill(255);
    ellipse(230, 180, 15, 10);
    ellipse(270, 180, 15, 10);
    fill('brown')
    ellipse(230, 180, 8, 10);
    ellipse(270, 180, 8, 10);
    fill(0);
    ellipse(230, 180, 5, 5);
    ellipse (270, 180, 5, 5);
   //eyes

    strokeWeight(5);
    stroke(81, 47, 33);
    line(223, 170, 277, 170);
    //eyebrows

    strokeWeight(2);
    stroke(0);
    line(216, 220, 284, 220);
    //mouth

    fill(2, 249, 6);
    noStroke();
    quad(220, 130, 280, 130, 286, 165, 214, 165);

    stroke(0);
    strokeWeight(1);
    quad(214, 150, 286, 150, 290, 165, 210, 165);
    //hat

    fill('tan');
    beginShape();
    vertex(240, 210);//bottom-left
    vertex(260, 210);//bottom-right
    vertex(250, 177);//top-bridge
    endShape();
    triangle(240, 210, 260, 210, 250, 173);
    triangle(240, 210, 260, 210, 250, 198);
    line(250, 198, 250, 173);
    fill(0);
    ellipse(247, 207, 3, 5);
    ellipse(253, 207, 3, 5);

    //nose

    noStroke();
    textSize(25);
    textStyle(BOLD);
    textAlign(CENTER);
    textFont('Times New Roman');
    fill(255, 0, 199);
    text('Jacob Fisher', 250, 50);
    text('Here he is with a rocket body.', 250, 450);
    text('Very nice.', 250, 470);
    textSize(12);
    textAlign(LEFT);
    text('You can contact him at 2121vokay@gmail.com, it is currently 2/9/2017', 5, 10);
    text('what is a collaboration statement? I had a lot of fun using this program.', 5, 20);
    text('I want to learn how to make lines curve now!', 5, 30);
    text('  Also feeling ready for 3-d and programming things to move without a mouse touching them!', 5, 65);
    text(' That would be really fun.', 5, 80)
}
