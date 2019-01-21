import {drawrects} from './canvas.js'

export function draw(player,floors) {
    //console.log('step')
    drawrects([{x:player.x,y:player.y,width:player.width,height:player.height}])

    
}