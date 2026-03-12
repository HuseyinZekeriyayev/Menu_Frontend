document.addEventListener('DOMContentLoaded', () => {

    // ── SMOOTH SCROLL ──
    document.querySelectorAll('.flavor-item').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── MOBİL / DESKTOP YOXLAMA ──
    function checkDevice() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile');
            document.body.classList.remove('desktop');
        } else {
            document.body.classList.add('desktop');
            document.body.classList.remove('mobile');
        }
    }
    checkDevice();
    window.addEventListener('resize', checkDevice);

});
