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

document.addEventListener('DOMContentLoaded', () => {
    let favorites = [];

    const countEl = document.getElementById('favorites-count');
    const modal = document.getElementById('favorites-modal');
    const list = document.getElementById('favorites-list');
    const icon = document.getElementById('favorites-icon');

    function updateCount() {
        countEl.textContent = favorites.length;
    }

    document.querySelectorAll('.box .fa-heart').forEach(heart => {
        heart.addEventListener('click', e => {
            e.preventDefault();
            const box = heart.closest('.box');
            const name = box.querySelector('h3').textContent.trim();
            const price = box.querySelector('.price').textContent.trim();

            const index = favorites.findIndex(f => f.name === name);
            if (index !== -1) {
                favorites.splice(index, 1);
                heart.classList.remove('favorited');
            } else {
                favorites.push({ name, price });
                heart.classList.add('favorited');
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateCount();
        });
    });

    icon.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.toggle('active');
        
    });

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
