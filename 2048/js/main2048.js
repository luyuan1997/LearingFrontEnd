//2048游戏的主逻辑
//因为游戏主体为4*4的小格子，所以主逻辑参数board采用的为一个数组
var board = new Array();//现在还是一维数组
var score = 0;

$(function(){
	newGame();
});

function newGame(){
	//初始化棋盘格
	init();
	//在随机两个格子里生成两个数字
	generateOneNumber();
	generateOneNumber();
}
//定位16个小格子的位置
function init(){
	for(var i=0; i<4; i++){
		for(var j=0;j<4;j++){

			var gridCell = $("#gridCell-"+i+"-"+j);
			gridCell.css("top",getPosTop(i,j));
			gridCell.css("left",getPosLeft(i,j));
		}
	}
	//将board由一维数组转化为二维数组
	for (var i=0; i < 4; i++){
		board[i] = new Array();
		for (var j=0; j <4; j++){
			board[i][j] = 0;
		}
	}

	updateBoardView();//通知前端对Number-cell中的元素进行显示
}

function updateBoardView(){
	$(".numberCell").remove();
	for (var i=0; i < 4; i++){
		for (var j=0; j<4; j++){
			$("gridContainer").append('<div class="numberCell" id="numeberCell-'+i+'-'+j+'" ></div>');
			var theNumberCell = $('numberCell-'+i+'-'+j); 

			if(board[i][j] == 0){
				theNumberCell.css('width','0px');
				theNumberCell.css('height','0px');
				theNumberCell.css('top',getPosTop(i,j)+50);
				theNumberCell.css('left',getPosLeft(i,j)+50);
			} else{
				theNumberCell.css('width','100px');
				theNumberCell.css('height','100px');
				theNumberCell.css('top',getPosTop(i,j));
				theNumberCell.css('left',getPosLeft(i,j));
				theNumberCell.css('background-color',getNumeberBackgroundColor(board[i][j]));
				theNumberCell.css('color',getNumeberColor(board[i][j]));
				theNumberCell.text(board[i][j]);
			}
		}
	}
}
//生成数字
function generateOneNumber(){
	if(nospace(board)){
		return false;
	}
	//随机选择一个位置
	var randx = parseInt(Math.floor(Math.random()*4));
	var randy = parseInt(Math.floor(Math.random()*4));
	//对位置进行判定，看是否可用。如果该位置为0，说明没有其他数字，可以使用；如果该位置的数据不为0，则需要再次进行选择随机位置，直至该位置的数字为0；
	while(true){
		if (board[randx][randy] == 0){
			break;
		}

		randx = parseInt(Math.floor(Math.random()*4));
		randy = parseInt(Math.floor(Math.random()*4));
	}
	//随机产生一个数字
	var randNumber = Math.random()<0.5?2:4;

	//在随机位置显示随机数字
	board[randx][randy] = randNumber;
	showNumberWithAnimation(randx,randy,randNumber);
	return true;
}