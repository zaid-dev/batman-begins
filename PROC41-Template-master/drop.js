class Drop{
    constructor(x,y){
        var ballOptions={
            isStatic:false,

        }

        this.droplet = Bodies.circle(x,y,5,ballOptions);
        World.add(world,this.droplet);
    }


    update(){
        if(this.droplet.position.y > 500){
            Matter.Body.setPosition(this.droplet,{x:random(0,400),y:random(0,100)})
        }
    }

    display(){
        background(0)
        ellipseMode(RADIUS);
        ellipse(this.droplet.position.x,this.droplet.position.y,5,5);
    }
}