import {clearcanvas,drawrects,canvas} from './canvas.js';
import {draw} from './draw.js'
import {
    player
} from './player.js'
import {
    AllSink,
    floors
} from './floors.js'

var Player = new player(100, 50, 0, 0, 5, 10);
var Contoler={
    LeftKey:false,
    RightKey:false,
    UpKey:false
}
window.addEventListener('keydown', (e) => {
    if (e.key == 'a') {
        Contoler.LeftKey=true;
    }
    if (e.key == 'd') {
        Contoler.RightKey=true
    }
    if(e.key == 'w'){
        Contoler.UpKey=true;
    }
})
window.addEventListener('keyup', (e) => {
    if (e.key == 'a') {
        Contoler.LeftKey=false;
    }
    if (e.key == 'd') {
        Contoler.RightKey=false;
    }
    if(e.key == 'w'){
        Contoler.UpKey=false;
    }
})

var difficulty=1
var tick =0

function update() {
    tick++
    if(tick%difficulty==0){
    AllSink();}
    Player.fall();
    Player.update();
    if(Player.x>200){
        Player.x=0;
    }
    else if(Player.x<0){
        Player.x=200;
    }
    if(Contoler.LeftKey){
        Player.run(-1);
    }
    if(Contoler.RightKey){
        Player.run(1)
    }
    if(Contoler.UpKey){
        if(Player.ground){
            Player.jump()}
    }
    //console.log(Player.ground)
    Player.ground =  false;
    floors.forEach((floor) => {
        if (floor.height + 10 > Player.y && floor.height < Player.y + Player.height) {
            if (200 / 10 * floor.hole > Player.x || 200 / 10 * (floor.hole + 1) < Player.x + Player.width) {
                if(floor.above){
                Player.y = floor.height - Player.height
                Player.yv = 1
                Player.ground=true;
            }
            else{
                console.log('strike')
                Player.y = floor.height +Player.height
                Player.yv = 1
            }
            }
        }
        })
    floors.forEach((floor) => {
        if (floor.height < Player.y) {
            floor.above = false;
        } else {
            floor.above = true
        }
    })

    
}

window.setInterval(function () {
    update()
}, 50)

function animate() {
    clearcanvas();
    drawrects([{
        x: Player.x,
        y: Player.y,
        width: Player.width,
        height: Player.height
    }], 'rgb(90,70,80)')
    floors.forEach((floor) => {
        drawrects([{
                    x: 0,
                    y: floor.height,
                    width: (200 / 10) * floor.hole,
                    height: 10
                },
                {
                    x: (200 / 10 * floor.hole + 200 / 10),
                    y: floor.height,
                    width: 200 - (200 / 10 * floor.hole + floor.hole),
                    height: 10
                }
            ],
            'white')
    })
    window.requestAnimationFrame(animate)
}
window.requestAnimationFrame(animate)