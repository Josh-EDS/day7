let rotation = 0
function rotateCircle(degrees) {
    if (degrees == 0) { circle.style.transform = 'rotate(0deg)'} else {
    rotation = rotation+degrees
    const circle = document.getElementById("circle");
    circle.style.transform = 'rotate('+rotation+'deg)';
}}

document.getElementById("rotate-add-90").addEventListener("click", function() { rotateCircle(90); })
document.getElementById("rotate-add-45").addEventListener("click", function() { rotateCircle(45); })
document.getElementById("rotate-reset").addEventListener("click", function() { rotateCircle(0); })
document.getElementById("rotate-sub-45").addEventListener("click", function() { rotateCircle(-45); })
document.getElementById("rotate-sub-90").addEventListener("click", function() { rotateCircle(-90); })
