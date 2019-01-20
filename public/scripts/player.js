export class player {
    constructor(x,y,xv,yv,height,width){
        this.x=x;
        this.y=y;
        this.xv=xv;
        this.yv=yv;
        this.height=10;
        this.width=5;
        this.ground=true;
        this.MaxSpeed=3;
    }
    fall(){
        this.yv=this.yv+1
        this.y=this.y+this.yv
    }
    run(direction){
        //console.log(direction)
        if(Math.abs(this.xv)<this.MaxSpeed){
            this.xv=this.xv+1*direction;
        }
        //this.x=this.x+direction
    }
    jump(){
        this.yv=-9;
        this.y=this.y+this.yv;
    }
    update(){
        
        this.x=this.x+this.xv;
        //this.y=this.y+this.yv;
        this.xv=this.xv*.8
    }

}

