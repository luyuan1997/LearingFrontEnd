
	var timerCount= window.setTimeout("timer()",1000);
		function timer(){
		var date=new Date("2018","1","10","20","30","0");
		var deadlineTime=date.getTime();
		var nowDate=new Date();
		var nowTime=nowDate.getTime();
		var distTime=nowTime-deadlineTime;
		//判断是否到达时间期限
		if(distTime>0){
			var d=Math.floor(distTime/1000/3600/24);
			var h=Math.floor(distTime/1000/3600%24);
			var m=Math.floor(distTime/1000/60%60);
			var s=Math.floor(distTime/1000%60);
			d = (String(d).length >= 2) ? d : '0' +d;
			h = (String(h).length >= 2) ? h : '0' +h;
			m = (String(m).length >= 2) ? m : '0' +m;
			s = (String(s).length >= 2) ? s : '0' +s;
			document.getElementById("days").innerText=d;
			document.getElementById("hours").innerText=h;
			document.getElementById("minutes").innerText=m;
			document.getElementById("seconds").innerText=s;
			timerCount=window.setTimeout("timer()",1000);
		}
	}