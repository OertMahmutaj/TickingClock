function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval(function() {
    var time = getSecondsSinceStartOfDay();
    

    const hourElement = document.getElementById('hour');
    const minElement = document.getElementById('min');
    const secElement = document.getElementById('sec');
    
    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time / 3600);
    
    console.log(time, hours, minutes, seconds);

    const hourRotation = ((hours % 12) * 30 + (minutes / 2))+180;
    console.log(hourRotation);
    const minuteRotation = (minutes * 6)+180;
    const secondRotation = (seconds * 6)+180;
    
    hourElement.style.transform = `rotate(${hourRotation}deg)`;
    minElement.style.transform = `rotate(${minuteRotation}deg)`;
    secElement.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
