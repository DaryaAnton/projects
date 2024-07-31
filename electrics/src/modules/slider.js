const slider = () => {
    const sliderWrapper = document.querySelector('.top-slider');
    const sliderSlide = document.querySelectorAll('.item');
    const sliderFilling = document.querySelectorAll('.table');
    const dotsBlock = document.createElement('div');
    const timerInterval = 3000;
    let currentSlide = 0;
    let dots;
    let interval;

    sliderWrapper.style.display = 'block';
    sliderWrapper.append(dotsBlock);
    dotsBlock.classList.add('dots-block');
    dotsBlock.style.position = 'absolute';
    dotsBlock.style.bottom = 0;
    dotsBlock.style.left = 50 + '%';
    dotsBlock.style.transform = 'translate(-50%)';
    dotsBlock.style.zIndex = 10;
    dotsBlock.style.height = 30 + 'px';
    dotsBlock.style.width = 100 + '%';
    dotsBlock.style.display = 'flex';
    dotsBlock.style.justifyContent = 'center';

    sliderSlide.forEach(slide => {
        slide.style.opacity = 0;
        slide.style.width = 100 + '%';
        slide.style.position = 'absolute';
        slide.style.top = 0;
        slide.style.left = 0;
    });

    sliderFilling.forEach(text => {
        text.style.visibility = 'visible';
        text.style.opacity = 1;
    });

    const addDots = () => {
        sliderSlide.forEach((slide, index) => {
            const li = document.createElement('li');
            li.classList.add('dot');
            li.style.width = 15 + 'px';
            li.style.height = 15 + 'px';
            li.style.borderRadius = 100 + '%';
            li.style.border = '3px solid #fff';
            li.style.listStyleType = 'none';
            li.style.marginRight = 10 + 'px';
            li.style.cursor = 'pointer';

            if (index === 0) {
                li.classList.add('dot-active');
                li.style.backgroundColor = '#fff';
            };
            dotsBlock.append(li);
        });
        dots = document.querySelectorAll('.dot');
    };

    sliderSlide[0].style.opacity = 1;
    sliderSlide[0].classList.add('active-slide');

    const prevSlide = (elems, index, srtClass, dotElems) => {
        elems[index].classList.remove(srtClass);
        elems[index].style.transition = 0.5 + 's';
        elems[index].style.opacity = 0;
        if (dotElems) {
            dotElems[index].classList.remove('dot-active');
            dotElems[index].style.backgroundColor = 'transparent';
        };
    };


    const nextSlide = (elems, index, srtClass, dotElems) => {
        elems[index].classList.add(srtClass);
        elems[index].style.transition = 0.5 + 's';
        elems[index].style.opacity = 1;
        if (dotElems) {
            dotElems[index].classList.add('dot-active');
            dotElems[index].style.backgroundColor = '#fff';
        };
    };

    const autoSlide = () => {
        prevSlide(sliderSlide, currentSlide, 'active-slide', dots);

        currentSlide++;
        if (currentSlide >= sliderSlide.length) {
            currentSlide = 0;
        };
        nextSlide(sliderSlide, currentSlide, 'active-slide', dots);
    };

    const startSlide = (timer = 3000) => {
        interval = setInterval(autoSlide, timer)
    };

    const stopSlide = () => {
        clearInterval(interval)
    };

    sliderWrapper.addEventListener('click', (e) => {
        if (!e.target.matches('.dot')) {
            return
        };
        prevSlide(sliderSlide, currentSlide, 'active-slide', dots);

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        };
        nextSlide(sliderSlide, currentSlide, 'active-slide', dots);
    });

    sliderWrapper.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot')) {
            stopSlide()
        };
    }, true);
    sliderWrapper.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot')) {
            startSlide(timerInterval);
        };
    }, true);

    addDots();
    startSlide(timerInterval);
}
export default slider;
