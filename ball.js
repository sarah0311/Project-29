class Polygon {
    
 constructor(x, y) {
      var options = {
         'restitution':0.8,
         'friction':1.0,
         'density':1.0
          }
        this.body = Bodies.circle(x,y,20, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
 }
    
  
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,0, 40,40);
        pop();
      
  }
}

