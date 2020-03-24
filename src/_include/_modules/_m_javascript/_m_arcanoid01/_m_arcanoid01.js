// import globalSet from '../_m_globalSet/_m_globalSet.js';
// globalSet();
// let _g = window.GLOBAL;

window.C_ARCANOID = {
	
	init: function(op){
		var canvas = document.getElementById("arcanoid");
		var ctx = canvas.getContext("2d");
		var ballRadius = 10;
		var x = canvas.width/2;
		var y = canvas.height-30;
		var speed = 5;
		var dx = speed;
		var dy = -speed;
		var paddleHeight = 10;
		var paddleWidth = 200;
		var paddleX = (canvas.width-paddleWidth)/2;
		var rightPressed = false;
		var leftPressed = false;

		var brickRowCount = 6;
		var brickColumnCount = 6;

		var brickHeight = 30;
		var brickPadding = 0.5;
		var brickOffsetTop = 30;
		var brickOffsetLeft = 10;

		var brickWidth = ((canvas.width-(brickOffsetLeft*2)) / brickRowCount) - brickPadding;
		var score = 0;
		var lives = 3;

		var bricks = [];
		for(var c=0; c<brickColumnCount; c++) {
			bricks[c] = [];
			for(var r=0; r<brickRowCount; r++) {
				bricks[c][r] = { x: 0, y: 0, status: 1 };
			}
		}

		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keyup", keyUpHandler, false);
		document.addEventListener("mousemove", mouseMoveHandler, false);

		var background = new Image();
			background.src = "assets/images/contents/arcanoid_bg.png";

		function keyDownHandler(e) {
			if(e.keyCode == 39) {
				rightPressed = true;
			}
			else if(e.keyCode == 37) {
				leftPressed = true;
			}
		}
		function keyUpHandler(e) {
			if(e.keyCode == 39) {
				rightPressed = false;
			}
			else if(e.keyCode == 37) {
				leftPressed = false;
			}
		}
		function mouseMoveHandler(e) {
			var relativeX = e.clientX - canvas.offsetLeft;
			if(relativeX > 0 && relativeX < canvas.width) {
				paddleX = relativeX - paddleWidth/2;
			}
		}
		function collisionDetection() {
			
			for(var c=0; c<brickColumnCount; c++) {
				for(var r=0; r<brickRowCount; r++) {
					var b = bricks[c][r];
					if(b.status == 1) {
						if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
							dy = -dy;
							b.status = 0;
							score++;
							console.log(score);
							
							switch( score ) {
								case Math.floor(brickRowCount*brickColumnCount * 0.1):
									console.log("メッセージ01")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.2):
									console.log("メッセージ02")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.3):
									console.log("メッセージ03")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.4):
									console.log("メッセージ04")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.5):
									console.log("メッセージ05")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.6):
									console.log("メッセージ06")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.7):
									console.log("メッセージ07")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.8):
									console.log("メッセージ08")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
								case Math.floor(brickRowCount*brickColumnCount * 0.9):
									console.log("メッセージ09")
									paddleWidth= paddleWidth -10;
									speed= speed +1;
									dx = speed;
									dy = -speed;
									break;
							}
							
							if(score == brickRowCount*brickColumnCount) {
								// alert("YOU WIN, CONGRATS!");
								// document.location.reload();
							}
						}
					}
				}
			}
		}

		function drawBall() {
			ctx.beginPath();
			ctx.arc(x, y, ballRadius, 0, Math.PI*2);
			ctx.fillStyle = "#FFFFFF";
			ctx.fill();
			ctx.closePath();
		}
		function drawPaddle() {
			ctx.beginPath();
			ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
			ctx.fillStyle = "#FFFFFF";
			ctx.fill();
			ctx.closePath();
		}
		function drawBricks() {
			for(var c=0; c<brickColumnCount; c++) {
				for(var r=0; r<brickRowCount; r++) {
					if(bricks[c][r].status == 1) {
						var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
						var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
						bricks[c][r].x = brickX;
						bricks[c][r].y = brickY;
						ctx.beginPath();
						ctx.rect(brickX, brickY, brickWidth, brickHeight);
						ctx.fillStyle = "#FFFFFF";
						ctx.fill();
						ctx.closePath();
						
					}
				}
			}
		}
		function drawScore() {
			ctx.font = "16px Arial";
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText("Score: "+score, 8, 20);
		}
		function drawLives() {
			ctx.font = "16px Arial";
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText("Lives: "+lives, canvas.width-65, 20);
		}

		function draw() {
			
			ctx.fillStyle = 'rgb(250,250,250)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(background,0,0);
			
			drawBricks();
			if(lives>=0) {
				drawBall();
				drawPaddle();
				drawScore();
				drawLives();
				collisionDetection();
			}
			

			if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
				dx = -dx;
			}
			if(y + dy < ballRadius) {
				dy = -dy;
			}
			else if(y + dy > canvas.height-ballRadius) {
				if(x > paddleX && x < paddleX + paddleWidth) {
					dy = -dy;
				}
				else {
					lives--;
					if(!lives) {
						// alert("GAME OVER");
						cancelAnimationFrame( draw) ;
						// document.location.reload();
					}
					else {
						x = canvas.width/2;
						y = canvas.height-30;
						dx = speed;
						dy = -speed;
						paddleX = (canvas.width-paddleWidth)/2;
					}
				}
			}

			if(rightPressed && paddleX < canvas.width-paddleWidth) {
				paddleX += 20;
			}
			else if(leftPressed && paddleX > 0) {
				paddleX -= 20;
			}

			x += dx;
			y += dy;
			if(lives>=0) {
				requestAnimationFrame(draw);
			}
		}

		draw();
	}
}
export default function(op) {
	window.C_ARCANOID.init(op);
}

