let spork = new p5(( sketch ) => {
    
      sketch.setup = () => {
        sketch.createCanvas(400, 400);
      };
    
      sketch.draw = () => {
        sketch.background(130, 56, 56);
        
        sketch.fill(67, 173, 173);
        sketch.textSize(30);
        sketch.text("The AMAZING Spork!", 50, 30);
        sketch.textSize(20);
        sketch.text("Is it a spoon?", 150, 70);
        sketch.text("Is it a fork?", 150, 100);
        sketch.textSize(35);
        sketch.text("IT'S BOTH!", 120, 140);
        sketch.textSize(12);
        sketch.text("Save time with the dishes and order the only utensil you will ever need!", 20, 170);
        sketch.textSize(10);
        sketch.text("*Knife not included", 300, 200);
        
        sketch.fill(255, 204, 0);
        sketch.ellipse(10, 325, 300, 300);//face
        sketch.fill(0, 0, 0);
        sketch.ellipse(40, 350, 200, 200);//mouth
        sketch.ellipse(70, 225, 20, 20);//eyes
        sketch.ellipse(20, 225, 20, 20);

        sketch.noStroke();//Spork
        sketch.fill(133, 126, 126);
        sketch.ellipse(sketch.mouseX, 350, 100, 50);
        sketch.rect(sketch.mouseX+25, 340, 150, 15);
        sketch.fill(130, 56, 56);
        sketch.rect(sketch.mouseX-50, 350, 30, 2);//top prong divide
        sketch.rect(sketch.mouseX-50, 345, 30, 2);//middle prong divide
        sketch.rect(sketch.mouseX-50, 355, 30, 2);//bottom prong divide
        sketch.fill(255, 0, 0);
        sketch.ellipse(sketch.mouseX, 325, 30, 30);//cherry
    };
    }, 'spork');