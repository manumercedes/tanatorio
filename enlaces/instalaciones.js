document.querySelectorAll('.imagen img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `<div class="contenido"><img src="${img.src}" alt=""><span class="cerrar">×</span></div>`;
    document.body.appendChild(modal);

    modal.querySelector('.cerrar').addEventListener('click', () => {
      modal.remove();
    });
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.remove();
    }
  }
});
