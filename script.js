var face = document.getElementById('face');
var move = document.getElementById('move');
var options = {
    enableHighAccuracy: true
};

navigator.geolocation.watchPosition(function(position){
    document.getElementById('accuracy').innerHTML = position.coords.accuracy;
    document.getElementById('altitude').innerHTML = position.coords.altitude;
    document.getElementById('altitudeAccuracy').innerHTML = position.coords.altitudeAccuracy;
    document.getElementById('heading').innerHTML = position.coords.heading;
    document.getElementById('latitude').innerHTML = position.coords.latitude;
    document.getElementById('longitude').innerHTML = position.coords.longitude;
    document.getElementById('speed').innerHTML = position.coords.speed;
    var heading = parseInt(position.coords.heading).toFixed();
    setDial(heading);
    getMoving(heading);
}, console.log('error'), options);

function setDial(heading){
    face.style.transform = 'rotate(-' + heading + 'deg)';
}

function getMoving(heading){
    if (isNaN(heading)){
        move.innerHTML = 'Move Around to Get A Reading';
    } else {
        move.innerHTML = heading + '˚';
    }
}