
(function () {
    const view = document.querySelector('.carousel-outer');
    const slider = view.querySelector('.carousel');
    const slideWidth = 200;
    const viewLength = view.offsetWidth;
    const leftBtn = view.querySelector('.arrow-left');
    const rightBtn = view.querySelector('.arrow-right');

    const sliderLength = slideWidth * 35;
    console.log('viewLength', viewLength)
    console.log('viewLength', viewLength)
    // Curreny position 
    let current = 0;
    //Doesn't go more than 0s
    const boundaryLeft = 0;
    const boundaryRight = sliderLength - viewLength;

    rightBtn.addEventListener('click', () => {
        moveRight();
    });

    leftBtn.addEventListener('click', () => {
        moveLeft();
    });

    //==========
    // Functions
    //==========

    function render(current) {
        slider.style.transform = `translateX(${current}px)`;
    }

    function moveRight() {
        current = current - 200 > - boundaryRight ? current - 200 : current; 
        render(current);
    }

    function moveLeft() {
        const nextOffset = current + slideWidth;

        if (nextOffset > boundaryLeft) {
            // do nth
            return;
        }
        current = nextOffset;
        render();
    }

}());
