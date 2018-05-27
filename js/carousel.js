
(function () {
    const view = document.querySelector('.carousel-outer');
    const slider = view.querySelector('.carousel');
    const slideWidth = 200;
    const viewLength = view.offsetWidth;
    const leftBtn = view.querySelector('.arrow-left');
    const rightBtn = view.querySelector('.arrow-right');

    const sliderLength = slideWidth * 35;

    let current = 0;
    const boundaryLeft = 0;
    const boundaryRight = -1 * Math.ceil((sliderLength - viewLength) / slideWidth) * slideWidth;
    
    rightBtn.addEventListener('click', () => {
        moveRight();
    });
    leftBtn.addEventListener('click', () => {
        moveLeft();
    });

    //==========
    // Functions
    //==========

    function render() {
        slider.style.transform = `translateX(${current}px)`;
    }

    function moveRight() {
        const nextOffset = current - slideWidth;
        if (nextOffset < boundaryRight) {
            return;
        }
        current = nextOffset;
        render();
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
