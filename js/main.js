// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
    mobileMenu.querySelectorAll('a').forEach(link => { 
        link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); }); 
    });
}

// Tile Image Rotation
function rotateTile(prefix, count) {
    let current = 1;
    setInterval(() => {
        for (let i = 1; i <= count; i++) {
            const el = document.getElementById(prefix + '-img' + i);
            if (el) el.classList.add('hidden-img');
        }
        current = current >= count ? 1 : current + 1;
        const active = document.getElementById(prefix + '-img' + current);
        if (active) active.classList.remove('hidden-img');
    }, 4000);
}

// Row 1: Primary (India)
rotateTile('t1', 3);
rotateTile('t2', 3);
rotateTile('t3', 3);

// Row 2: Secondary (India)
rotateTile('t4', 3);
rotateTile('t5', 3);
rotateTile('t6', 3);

// Row 3: International
rotateTile('t7', 3);
rotateTile('t8', 3);
rotateTile('t9', 3);
