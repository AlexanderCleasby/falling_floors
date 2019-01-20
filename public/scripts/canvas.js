export const canvas = document.getElementById('game'); // in your HTML this element appears as <canvas id="myCanvas"></canvas>
const ctx = canvas.getContext('2d');


canvas.width=window.innerWidth;
canvas.height=window.innerHeight*1;

const slices = 200

export function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawrects(elements,color){
    elements.forEach(element => {
        ctx.beginPath();
        ctx.lineWidth="6";
        ctx.fillStyle=color;
        
        ctx.rect(
                element.x/slices*canvas.width,
                element.y/slices*canvas.height,
                element.width/slices*canvas.width,
                element.height/slices*canvas.height); 
        ctx.fill();   
    });
}

export function clearcanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}



