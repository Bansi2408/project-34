class Monster{
    constructor(x,y,r) {
        var options = {
            density: 1,
            frictionAir:1
        }

        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }
}