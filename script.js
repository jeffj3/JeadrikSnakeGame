var score;
var bestScore 
var gamePlaying;
var appleX;
var appleY;
var snakeArray;
var direction;

funtion setup() {
    noLoop();
    gamePlaying = false;
    createCanvsas(400,480);
    framerate(5);
    score = 0;
    bestScore = loadBestScore();

    snakeArray = [];
    makeSnakePiece(60,200);
    makeSnakePiece(40,200);
    makeSnakePiece(20,200);

    appleX = 200;
    appleY = 200;

    direction = "RIGHT"
    
    TextSize(18)
}

