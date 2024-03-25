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

    var userIPAddress = window.location.hostname;
    ipInfoDiv.textContent = userIPAddress;
});


let msg1 = " | niggas.world";
const speed = 250;

function scrollTitle() {
    document.title = msg1;
    msg1 = msg1.substring(1, msg1.length) + msg1.charAt(0);
    setTimeout(scrollTitle, speed);
}

scrollTitle();
