const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const paddleWidth = 15;
const paddleHeight = 100;
const paddleMargin = 10;
const ballRadius = 10;
const playerColor = '#4CAF50';
const aiColor = '#F44336';
const ballColor = '#FFD600';
const netColor = '#fff';

// Initial state
let playerY = (canvas.height - paddleHeight) / 2;
let aiY = (canvas.height - paddleHeight) / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 3;
let playerScore = 0;
let aiScore = 0;

// Mouse control for player paddle
canvas.addEventListener('mousemove', function(evt) {
    const rect = canvas.getBoundingClientRect();
    const mouseY = evt.clientY - rect.top;
    playerY = mouseY - paddleHeight / 2;
    // Clamp to canvas
    if (playerY < 0) playerY = 0;
    if (playerY + paddleHeight > canvas.height) playerY = canvas.height - paddleHeight;
});

// Draw net
function drawNet() {
    for (let i = 0; i < canvas.height; i += 30) {
        ctx.fillStyle = netColor;
        ctx.fillRect(canvas.width / 2 - 1, i, 2, 15);
    }
}

// Draw everything
function draw() {
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Net
    drawNet();

    // Left paddle (player)
    ctx.fillStyle = playerColor;
    ctx.fillRect(paddleMargin, playerY, paddleWidth, paddleHeight);

    // Right paddle (AI)
    ctx.fillStyle = aiColor;
    ctx.fillRect(canvas.width - paddleMargin - paddleWidth, aiY, paddleWidth, paddleHeight);

    // Ball
    ctx.beginPath();
    ctx.arc
