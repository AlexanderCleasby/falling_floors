export class floor {
    constructor(height,hole){
        this.height=height
        this.hole=hole
    }
}

function floorSink(floors){
    if (floors.length<5){
        floors.push(new floor(0,Math.floor(Math.random()*Math.floor(10))))
    }
    floors.forEach((floor)=>{
        floor.height=floor.height+1;
    })
    var newfloors=floors.filter((floor)=>{
    return floor.height<200})
    return newfloors
}

floors = [];

for(var i=0;i<5;i++){
console.log(floors)
floors.push(new floor((200/5*i),Math.floor(Math.random()*Math.floor(10))))}
console.log(floors)
export var floors 


export function AllSink(){
    floors=floorSink(floors)
    }
