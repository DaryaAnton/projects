import { animate } from './helpers';
const modal = () => {
    const btnModal = document.querySelectorAll('.fancyboxModal');
    const overlayModal = document.querySelector('.modal-overlay');
    const windowModal = document.querySelector('.modal-callback');

    btnModal.forEach((btn) => {
        btn.addEventListener('click', () => {
            overlayModal.style.display = 'block';
            windowModal.style.display = 'block';

            animate({
                duration: 600,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    overlayModal.style.opacity = progress;
                    windowModal.style.opacity = progress;
                }
            });
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target.matches('.modal-overlay') || event.target.closest('.modal-close')) {
            overlayModal.style.display = 'none';
            windowModal.style.display = 'none';
        }
    });
}

export default modal;