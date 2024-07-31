const preloader = () => {

    const preloader = document.querySelector('.preloader')
    window.addEventListener('load', () => {
        preloader.classList.add('hide');
        setTimeout(() => {
            preloader.remove();
        }, 600)
    })
}

export default preloader;

