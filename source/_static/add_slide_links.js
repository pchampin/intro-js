window.addEventListener('load', () => {
    let path = window.location.pathname.split('/');
    if (/slides/.test(path)) {
        return; // do not add links in slides
    }
    let filename = path[path.length-1];
    for (a of document.querySelectorAll('a.headerlink')) {
        let b = a.cloneNode();
        b.innerText = '§';
        let hash = (new URL(a.href)).hash;
        b.href = 'slides/' + filename + hash;
        a.parentElement.appendChild(b);
    }
});
