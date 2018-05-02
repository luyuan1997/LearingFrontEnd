window.onload = function(){
	var slider = document.getElementById('slider');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index =1;
	var animated = false;
	var timer;

	function showButton(){
		for(let i=0; i<buttons.length; i++){
			if(buttons[i].className == 'on'){
				buttons[i].className ='';
				break;
			};
		}
		buttons[index-1].className = 'on';
	}

	// next.onclick = function(){
	// 	list.style.left = parseInt(list.style.left) - 1000 +"px";
	// }
	// prev.onclick = function(){
	// 	list.style.left = parseInt(list.style.left) +1000+'px';
	// }
	// 优化为如下代码:
	function animate(offset){
		animated = true;
		var newLeft = parseInt(list.style.left) + offset;
		var time =300;
		var interval = 10;
		var speed = offset/(time/interval);

		function go(){
			if((speed<0&&parseInt(list.style.left)>newLeft) || (speed>0&&parseInt(list.style.left)<newLeft)){
				list.style.left = parseInt(list.style.left) + speed +'px';
				setTimeout(go, interval);
			} else {
				animated = false;
				list.style.left = newLeft +"px";
				if (newLeft > -1000){
					list.style.left = -4000+'px';
				}
				if (newLeft < -4000){
					list.style.left = -1000+'px';
				}
			}
		}
		go();
	}

	function play(){
		timer = setInterval(function(){
			next.onclick();
		},3000);
	}

	function stop(){
		clearInterval(timer);
	}

	next.onclick = function(){
		if(index == 4){
			index =1;
		} else {
			index += 1;
		}
		showButton();
		if(!animated){
			animate(-1000);
		}
	}
	prev.onclick = function(){
		if(index == 1){
			index =4;
		} else {
			index -= 1;
		}
		showButton();
		if(!animated){
			animate(1000);
		}
	}
	for(let i=0; i<buttons.length;i++){
		buttons[i].onclick = function(){
			if(this.className == 'on'){
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -1000*(myIndex - index);
			animate(offset);
			index = myIndex;
			showButton();
		}
	}

	slider.onmouseover = stop;
	slider.onmouseout = play;

	play();
}