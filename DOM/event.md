<!-- 当对于同一个对象绑定onclick事件时，后面的事件会直接覆盖前面的事件，如： -->
oBtn.onclick = function(){
	alert(111);
}
oBtn.onclick = function(){
	alert(222);
}
// 此时，窗口只能显示出"222"，可以采用如下方法进行一定的修改，即：
oBtn.onclick = function(){
	alert(111);
	alert(222);
}
//对于DOM绑定事件对样式进行修改，如：
oBtn.onclick = function(){
	this.style.background ="red";
	this.style.borderTop="5px solid black";
}
// 对于中间带有"-"的属性，将"-"去掉，后面的单词首字母大写就可以；
// this在程序中代指该对象；



选项卡练习DOM事件
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<title>选项卡练习DOM事件</title>
	<style>
		*{margin:0;padding: 0;}
		ul{list-style:none;}
		#tab-container{
			width:400px;
			height:200px;
			margin:50px auto;
		}
		#tab li{
			width:120px;
			height: 30px;
			background-color:#ccc;
			margin-right: 5px;
			float:left;
			text-align: center;
			line-height: 30px;
			cursor: pointer;
		}
		/*这里必须添加高度，原因在于：tab中的li设置了浮动，此时content的上边缘为总的tab-container地上边缘，如果不设置tab的高度，那么后面content的上边缘的横线就会在tab-container的上边缘进行显示*/
		#tab{
			height:30px;
		}
		#content{
			height:170px;
			background-color: #ccc;
			border-top:1px solid #000;
		}
		/*此处必须添加#tab，原因在于上面设置了#tab li，如果只是设置.selected，颜色就会是#ccc；*/
		#tab .selected{
			background-color:#000;
			color:#fff;
		}
		#content div{
			display:none;
		}
		#content .active{
			display:block;
		}
	</style>
</head>
<body>
	<div id="tab-container">
		<ul id="tab">
			<li class="selected">jquery</li>
			<li>javascript</li>
			<li>css</li>
		</ul>
		<div id="content">
			<div class="active">1111</div>
			<div>2222</div>
			<div>3333</div>
		</div>
	</div>
	<script>
		var oTab = document.getElementById('tab');
		var aLi = oTab.getElementsByTagName('li');
		var oContent = document.getElementById('content');
		var aDiv = oContent.getElementsByTagName('div');
		for (let i=0; a<aLi.length; i++){
			aLi.index = i;
			aLi[i].onclick = function(){
				for(let i=0; i<aLi.length;i++){
					aLi[i].className="";
					aDiv[i].className="";
				}
				this.className = 'selected';
				aDiv[this.index].className='active';
				// 此处aDiv[不可使用i]，原因，当for循环后，i的值为3,因此，需要增加一个索引，this.index；
			}
		}
	</script>
</body>
</html>