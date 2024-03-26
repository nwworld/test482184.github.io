document.addEventListener('DOMContentLoaded', function() {
    var blackScreen = document.getElementById('black-screen');
    var clickText = document.getElementById('click-text');
    var video = document.getElementById('bg-video');
    var ipInfoDiv = document.getElementById('ip-info');
    var locationInfoDiv = document.getElementById('location-info');

    blackScreen.addEventListener('click', function() {
        blackScreen.style.display = 'none';
        clickText.style.display = 'none';
        video.play();
        video.muted = false;
    });

    fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var userIPAddress = data.query;
        showIPAddress(userIPAddress);

        var userLocation = data.city + ', ' + data.regionName + ', ' + data.country;
        console.log(userLocation);
        showLocation(userLocation);
    })
    .catch(error => {
        console.error('IP adresi alınamadı:', error);
    });

    function typeEffect(element, speed, text) {
        var i = 0;
        var timer = setInterval(function() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    function showIPAddress(ipAddress) {
        var ipInfoText = document.createElement('span');
        ipInfoDiv.appendChild(ipInfoText);
        typeEffect(ipInfoText, 100, 'IP Address: ' + ipAddress);
    }

    function showLocation(location) {
        var locationInfoText = document.createElement('span');
        locationInfoDiv.appendChild(locationInfoText);
        typeEffect(locationInfoText, 100, 'Location: ' + location);
    }
});

let msg1 = " | niggas.world";
const speed = 250;

function scrollTitle() {
    document.title = msg1;
    msg1 = msg1.substring(1, msg1.length) + msg1.charAt(0);
    setTimeout(scrollTitle, speed);
}

scrollTitle();
