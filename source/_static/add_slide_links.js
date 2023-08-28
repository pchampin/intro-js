window.addEventListener('load', () => {
    let path = window.location.pathname.split('/');
    if (/slides/.test(path)) {
        return; // do not add links in slides
    }
    let filename = path[path.length-1];
    const toc = document.querySelector('.wy-menu-vertical');
    if (filename !== 'genindex.html') {
        let p = document.createElement('p');
        p.classList.add('slides');
        let span = document.createElement('span');
        span.classList.add('caption-text');
        span.textContent='Diaporama';
        p.appendChild(span);
        toc.appendChild(p);    
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');  
        li.classList.add('toctree-l1');
        a.classList.add('reference');  
        a.classList.add('internal');
        a.textContent = 'Voir les diapositives';
        a.href = `slides/${filename}`;
        li.appendChild(a);
        ul.appendChild(li);
        ul.classList.add('slides');
        toc.appendChild(ul);
        for (let a of document.querySelectorAll('a.headerlink')) {
            let b = a.cloneNode();
            b.innerText = '§';
            let hash = (new URL(a.href)).hash;
            b.href = 'slides/' + filename + hash;
            a.parentElement.appendChild(b);
        }
    }
    for (p of toc.querySelectorAll('p')) {
        p.classList.add('caption');
        p.role = 'header';
    } 
});
