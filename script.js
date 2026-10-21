
let currentPage = 1, animating = false;

function showPage(n) {
    n = Number(n);
    if (animating || n === currentPage) return;

    let old = document.getElementById('page-' + currentPage), next = document.getElementById('page-' + n);
    if (!next) return;
    animating = true;

    let dir = n > currentPage;
    let out = dir ? 'out-left' : 'out-right', enter = dir ? 'in-right' : 'in-left';

    document.querySelectorAll('.nav-btn').forEach((b, i) => b.classList.toggle('active', i === n - 1));

    next.hidden = false;
    old.classList.add(out);
    next.classList.add(enter);

    next.addEventListener('animationend', function end(e) {
        if (e.target !== next) return;
        next.removeEventListener('animationend', end);
        old.hidden = true;
        old.classList.remove(out);
        next.classList.remove(enter);
        currentPage = n;
        animating = false;
    });
}
