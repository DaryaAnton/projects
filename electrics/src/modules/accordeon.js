const accordeon = () => {
    const accordeon = document.querySelector('.accordeon');
    const accordeonElement = accordeon.querySelectorAll('.element');
    const accordeonContent = accordeon.querySelectorAll('.element-content');


    accordeonElement.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            accordeonElement.forEach((el, id) => {
                el.classList.remove('active')
                accordeonContent[id].style.display = 'none';
                accordeonContent[id].style.cursor = 'pointer';
            });
            elem.classList.add('active');
            accordeonContent[index].style.display = 'block';
            accordeonContent[index].style.cursor = 'pointer';
        });
    });
}

export default accordeon;