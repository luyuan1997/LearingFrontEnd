window.onload = function() {

    var hourHand = document.querySelector('.hourHand');
    var minuteHand = document.querySelector('.minuteHand');
    var secondHand = document.querySelector('.secondHand');
    var time = document.querySelector('.time');
    var clock = document.querySelector('.clock');
    var audio = document.querySelector('.audio');

    function setDate(){
        var today = new Date();
        
        var second = today.getSeconds();
        var secondDeg = ((second / 60) * 360) + 360; 
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
      
        audio.play();
        
        var minute = today.getMinutes();
        var minuteDeg = ((minute / 60) * 360); 
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        var hour = today.getHours();
        var hourDeg = ((hour / 12 ) * 360 ); 
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        
        time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';

        }
  
    setInterval(setDate, 1000);
 
}