document.getElementById('speech-bubble').style.display = 'none';

let robot = document.querySelectorAll('path');
let screen = document.getElementById("screen-text-container");
let clickCount = 0;
const eyes = document.querySelectorAll('.eye-left-iris, .eye-right-iris');

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeIrisColor() {
    eyes.forEach(eye => eye.setAttribute('fill', getRandomColor()));
}

robot.forEach(function(path) {
    let bubble = document.getElementById("speech-bubble");
    bubble.innerHTML = "Ooch, that hurts!";
    path.addEventListener('click', function() {
        bubble.style.display = 'block';
        document.querySelectorAll('.angry-eyes.invisible').forEach(function(element) {
            element.classList.remove('invisible');
            element.classList.add('visible');
        });
        setTimeout(function() {
            bubble.style.display = 'none';
            document.querySelectorAll('.angry-eyes.visible').forEach(function(element) {
                element.classList.remove('visible');
                element.classList.add('invisible');
            });
        }, 2000);

        if (path.classList.contains('eye-left-iris') || path.classList.contains('eye-right-iris')) {
            clickCount += 1;
            if (clickCount >= 7) { // Normalement 10 mais vu que l'oeil est compliqué a bien clické on gagne du temps.
                changeIrisColor();
                clickCount = 0;
            }
        }
    });
});

robot.forEach(function(path) {
    path.addEventListener('mouseover', function(event) {
        document.getElementById("screen-text").innerHTML = 'X: ' + event.clientX + ',Y: ' + event.clientY;
    });
});

screen.addEventListener('mouseover', function(event) {
    document.getElementById("screen-text").innerHTML = 'X: ' + event.clientX + ',Y: ' + event.clientY;
});

document.getElementById('robot-input').addEventListener('change', function() {
    let bubble = document.getElementById("speech-bubble");
    if (this.value.trim() !== '') {
        document.getElementById("screen-text").innerHTML = "Don't worry, I'll take care of it!";
    } else {
        bubble.innerHTML = "You must write something for me to take care of it.";
        bubble.style.display = 'block';
        setTimeout(function() { bubble.style.display = 'none'; }, 2000);
    }
});
