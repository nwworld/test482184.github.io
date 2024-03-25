document.addEventListener('DOMContentLoaded', function() {
    var blackScreen = document.getElementById('black-screen');
    var clickText = document.getElementById('click-text');
    var video = document.getElementById('bg-video');
    var ipInfoDiv = document.getElementById('ip-info');

    blackScreen.addEventListener('click', function() {
        blackScreen.style.display = 'none';
        clickText.style.display = 'none';
        video.play();
        video.muted = false;
    });

    fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
        var userIPAddress = data.query;
        // IP adresini göster
        showIPAddress(userIPAddress);
    })
    .catch(error => {
        console.error('IP adresi alınamadı:', error);
    });

    // Typing effect fonksiyonu
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

    // IP adresini gösteren fonksiyon
    function showIPAddress(ipAddress) {
        var ipInfoText = document.createElement('span');
        ipInfoDiv.appendChild(ipInfoText);

        // "IP Address:" metnini ve IP adresini typing effect ile yaz
        typeEffect(ipInfoText, 100, 'IP Address: ' + ipAddress);
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
