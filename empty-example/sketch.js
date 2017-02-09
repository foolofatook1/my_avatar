function setup() {
createCanvas(500, 500);
}

function draw() {


    background('blue');
    //sky

    fill('green');
    noStroke();
    rect(0, 400, 500, 100);
    //ground

   fill(81, 47, 33);
    triangle(200, 240, 300, 240, 250, 135);
    //hair

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
    line(215, 220, 283, 220);
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

    //nose

}
