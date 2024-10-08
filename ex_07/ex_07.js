window.onload = function() {
    const title = document.querySelector('h1');
    let gap, Froze = false;

    function shuffle() { title.textContent = title.textContent.split(' ').sort(() => Math.random() - 0.5).join(' '); }

    function toggleMix(start) {
        clearInterval(gap);
        if (start && !Froze) gap = setInterval(shuffle, 2000);
    }

    title.onmouseover = () => toggleMix(false);
    title.onmouseout = () => toggleMix(true);

    title.onclick = e => {
        e.stopPropagation();
        if (!Froze) {
            navigator.clipboard.writeText(title.textContent);
            Froze = true;
            toggleMix(false);
        }};

    document.onclick = e => {
        if (e.target !== title) {
            Froze = false;
            toggleMix(true);
        }};

    document.onkeydown = e => { if (e.key == '!') setTimeout(() => alert('42!'), 42000); };
    toggleMix(true);
};