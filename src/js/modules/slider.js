import addZero from "./generalFunctions";

function slider({container, slide, prevArrow, nextArrow, totalCounter, currentCounter, wrapper, field}) {
    const slider = document.querySelector(container),
          slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          sliderWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(sliderWrapper).width;
    let slideIndex = 1,
        offset = 0;

    total.textContent = addZero(slides.length);
    current.textContent = addZero(slideIndex);

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          dotsArr = [];
    dots.classList.add('carousel-indicators');
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i === 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        dotsArr.push(dot);
    }

    function updateSlides() {
        current.textContent = addZero(slideIndex);
        slidesField.style.transform = `translateX(-${offset}px)`;
        dotsArr.forEach(dot => dot.style.opacity = '.5');
        dotsArr[slideIndex - 1].style.opacity = 1;
    }

    function cutNumbers(str) {
        return +str.replace(/\D/g, '')
    }

    next.addEventListener('click', () => {
        if (offset == cutNumbers(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += cutNumbers(width);
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        }   else {
            slideIndex++;
        }
        updateSlides();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = cutNumbers(width) * (slides.length - 1);
        } else {
            offset -= cutNumbers(width);
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        }   else {
            slideIndex--;
        }
        updateSlides();
    });

    dotsArr.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = cutNumbers(width) * (slideTo - 1);
            updateSlides()
        });
    });
}

export default slider;