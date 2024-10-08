window.addEventListener('load', function () {
    const cube = document.querySelector('[id="square"]');
    function reduceOpacity() { cube.style.opacity = 0.5; }
    function resetOpacity() { cube.style.opacity = 1; }
    cube.addEventListener('mouseover', reduceOpacity);
    cube.addEventListener('mouseout', resetOpacity);
});
