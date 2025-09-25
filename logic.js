const snakeBodyPositions = [
    {top: 45, left: 45, part:'head', DOM: false},
    {top: 40, left: 45, part:'body', DOM: false},
    {top: 35, left: 45, part:'body', DOM: false}
];
const snakeFood = {top: 0, left: 0, ate:false};
let movingDirection = 'down';
let wallCollide = false;
let selfCollide = false;
let score = 0;
let gameStarted = false;

function paintBoard() {
    document.querySelector('.game-score').innerText = 'Score: '+score;
    if (!wallCollide && !selfCollide) {
        let snakeFoodDOM = document.querySelector('.snake-food');
        snakeFoodDOM.style.top = snakeFood.top+'%';
        snakeFoodDOM.style.left = snakeFood.left+'%';
        document.querySelector('.game-board').appendChild(snakeFoodDOM);
        for (let i = 0; i < snakeBodyPositions.length; i++) {
            const element = snakeBodyPositions[i];
            if (!element.DOM) {
                snakeBodyPositions[i].DOM = true;
                let newSnakePart = document.createElement('div');
                newSnakePart.classList.add('snake-body-part');
                newSnakePart.setAttribute('data-body-part', element.part);
                newSnakePart.style.top = element.top+'%';
                newSnakePart.style.left = element.left+'%';
                document.querySelector('.game-board').appendChild(newSnakePart);
            }
            else{
                document.querySelectorAll('.snake-body-part')[i].style.top = element.top+'%';
                document.querySelectorAll('.snake-body-part')[i].style.left = element.left+'%';
            };
        };
    } else{
        console.log('lost');
        clearInterval(interval);
        setTimeout(() => {
            alert('YOUR SCORE IS '+score+', Restart Game!');
            window.location.reload();
        }, 0);
    }
};
function moveSnake() {
    let lastSnakePartPositions = {top:snakeBodyPositions[0].top, left:snakeBodyPositions[0].left};
    if (movingDirection === 'up') {
        snakeBodyPositions[0].top -= 5;
    }
    else if (movingDirection === 'down') {
        snakeBodyPositions[0].top += 5;
    }
    else if (movingDirection === 'left') {
        snakeBodyPositions[0].left -= 5;
    }
    else if (movingDirection === 'right') {
        snakeBodyPositions[0].left += 5;
    };
    for (let i = 1; i < snakeBodyPositions.length; i++) {
        let a = snakeBodyPositions[i].top;
        let b = snakeBodyPositions[i].left;
        snakeBodyPositions[i].top = lastSnakePartPositions.top;
        snakeBodyPositions[i].left = lastSnakePartPositions.left;
        lastSnakePartPositions.top = a;
        lastSnakePartPositions.left = b;
    };
    if (snakeFood.top === snakeBodyPositions[0].top && snakeFood.left === snakeBodyPositions[0].left) {
        snakeFood.ate = true;
        snakeBodyPositions.push({top:lastSnakePartPositions.top, left:lastSnakePartPositions.bottom, part:'body', DOM:false});
        score++;
        generateSnakeFood();
    }
    if (snakeBodyPositions[0].top > 95 || snakeBodyPositions[0].top < 0 || snakeBodyPositions[0].left > 95 || snakeBodyPositions[0].left < 0) {
        wallCollide = true;
    };
    for (let i = 1; i < snakeBodyPositions.length; i++) {
        const element = snakeBodyPositions[i];
        if (element.top === snakeBodyPositions[0].top && element.left === snakeBodyPositions[0].left) {
            selfCollide = true;
            break;
        };
    };
};

function generateSnakeFood() {
    let l = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
    let safe = false;
    let top;
    let left;
    while (!safe) {
        top = l[Math.floor(Math.random() * l.length)];
        left = l[Math.floor(Math.random() * l.length)];
        let found = false;
        snakeBodyPositions.forEach(element => {
            if (element.top === top || element.left === left) {
                found = true;
            };
        });
        if (!found) {
            safe = true;
        };
    };
    snakeFood.top = top;
    snakeFood.left = left;
    snakeFood.ate = false;
};
function gameEngine() {
    moveSnake();
    paintBoard();
};

var interval; 
document.addEventListener('keydown', function (e) {
    if (!gameStarted && [38, 40, 37, 39].includes(e.keyCode)) {
        interval = setInterval(gameEngine, 150);
        gameStarted = true;
    }
    if (e.keyCode == '38') { // up arrow
        if (['up','down'].includes(movingDirection)) {
            return;
        } else {
            movingDirection = 'up';
        };
    }
    else if (e.keyCode == '40') { // down arrow
        if (['up','down'].includes(movingDirection)) {
            return;
        } else {
            movingDirection = 'down';
        };
    }
    else if (e.keyCode == '37') { // left arrow
        if (['left','right'].includes(movingDirection)) {
            return;
        } else {
            movingDirection = 'left';
        };
    }
    else if (e.keyCode == '39') { // right arrow
        if (['left','right'].includes(movingDirection)) {
            return;
        } else {
            movingDirection = 'right';
        };
    };
});
generateSnakeFood();
paintBoard();