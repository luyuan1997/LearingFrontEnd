//动画逻辑
function showNumberWithAnimation(i,j,randNumber){
	 var numberCell = $('numberCell-'+i+'-'+j);
	 numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	 numberCell.css('color',getNumberColor(randNumber));
	 numberCell.text(randNumber);

	 numberCell.animate({
	 	width:"100px",
	 	height:"100px",
	 	top:getPosTop(i,j),
	 	left:getPosLeft(i,j)
	 },50);
}