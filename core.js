const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContext("2d");
let snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200},];
let change_direction = false;
let dx = 10
let dy = 0
 
const board_border = 'black';
const board_background = "white";
const snake_col = 'darkRed';
const snake_border = 'Black';
main();

function main() {
    setTimeout(function onTick() {
        clear_board();
        move_snake();
        hitWall();
        drawSnake();
        // Call main again
        main();
    }, 100)
}

/*Function that prints the parts*/
function drawSnakePart(snakePart) {  
    snakeboard_ctx.fillStyle = 'darkRed';  
    snakeboard_ctx.strokestyle = 'black';
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function hitWall() {
    if(snake[0].x < 0) {
        snake[0].x = snakeboard.width
    }else{return}
    if(snake[0].x > snakeboard.width){
        snake[0].x = 0
    }else{return}
    if(snake[0].y < 0){
        snake[0].y = snakeboard.height
    }else{return}
    if(snake[0].y > snakeboard.height){
        snake[0].y = 0
    }else{return}
}

function drawSnake() {  
    snake.forEach(drawSnakePart);
}



function clear_board() {
    //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = board_background;
    //  Select the colour for the border of the canvas
    snakeboard_ctx.strokestyle = board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw a "border" around the entire canvas
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

function change_direction(event) 
{  
   const LEFT_KEY = 37;
   const RIGHT_KEY = 39;
   const UP_KEY = 38;
   const DOWN_KEY = 40;
 
   const keyPressed = event.keyCode;
   const goingUp = dy === -10;
   const goingDown = dy === 10;
   const goingRight = dx === 10;  
   const goingLeft = dx === -10;
 
     if (keyPressed === LEFT_KEY && !goingRight)
     {    
          dx = -10;
          dy = 0;  
     }
 
     if (keyPressed === UP_KEY && !goingDown)
     {    
          dx = 0;
          dy = -10;
     }
 
     if (keyPressed === RIGHT_KEY && !goingLeft)
     {    
          dx = 10;
          dy = 0;
     }
 
     if (keyPressed === DOWN_KEY && !goingUp)
     {    
          dx = 0;
          dy = 10;
     }
}

function move_snake() {  
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}

document.addEventListener("keydown", change_direction);
