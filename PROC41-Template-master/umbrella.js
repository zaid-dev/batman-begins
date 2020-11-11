class Umbrella{
    constructor(x,y){
        this.thing = Bodies.circle(x,y,20,20);
        World.add(world,this.thing);

    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.thing.position.x,this.thing.position.y,20,20);
    }
}