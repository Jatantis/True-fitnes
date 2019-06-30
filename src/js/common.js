// console.log(add(2, 6))

//accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}
//accordion mobile adaptive



//accordion adaptive maxWidth
if (document.querySelector('.accordion-wrapper-desctop') !== null) {
    const accordionDesctop = document.querySelector('.accordion-wrapper-desctop');
    const accordionMobile = document.querySelector('.accordion-wrapper-mobile');

    const maxWidth = window.matchMedia('(max-width: 800px)');

    if (maxWidth.matches) {
        accordionDesctop.style.display = 'none';
    } else {
        accordionMobile.style.display = 'none';
        console.log('lalal');
    }
}


//accordion mobile

const mobileAccordionItems = document.querySelectorAll('.mobile-accordion-item');

mobileAccordionItems.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.classList.contains('open')) {
            item.classList.remove('open');
        } else {
            mobileAccordionItems.forEach(function (item2) {
                item2.classList.remove('open')
            }
            );
            item.classList.add('open');
        }
    })
}
);



// all sliders

if (document.querySelector('.my-slider-first-lvl') !== null) {
    var slider = tns({
        container: '.my-slider-first-lvl',
        items: 3,
        touch: true,
        preventScrollOnTouch: "auto",
        loop: true,
        slideBy: "page",
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        controlsContainer: "#customize-controls",
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 3,
            }
        },
    });
}


let sliderTwo = {
    container: '.my-slider-two-lvl',
    items: 3,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls2",
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 3,
        }
    },
}

if (document.querySelector('.my-slider-two-lvl') !== null) {
    var slider = tns(
        sliderTwo
    );
}



let sliderThree = {
    container: '.my-slider-three-lvl',
    items: 3,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls3",
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 3,
        }
    },
}
if (document.querySelector('.my-slider-three-lvl') !== null) {
    var slider = tns(
        sliderThree
    );
}


let sliderFour = {
    container: '.my-slider-four-lvl',
    items: 3,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls4",
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 3,
        }
    },
}

if (document.querySelector('.my-slider-four-lvl') !== null) {
    var slider = tns(
        sliderFour
    );

}


let sliderFive = {
    container: '.my-slider-five-lvl',
    items: 3,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls5",
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 3,
        }
    },
}
if (document.querySelector('.my-slider-five-lvl') !== null) {
    var slider = tns(
        sliderFive
    );

}


let sliderSix = {
    container: '.my-slider-six-lvl',
    items: 3,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls6",
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 3,
        }
    },
}
if (document.querySelector('.my-slider-six-lvl') !== null) {
    var slider = tns(
        sliderSix
    );

}


let sliderSeven = {
    container: '.my-slider-seven-lvl',
    items: 3,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls7",
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 3,
        }
    },
}
if (document.querySelector('.my-slider-seven-lvl') !== null) {
    var slider = tns(
        sliderSeven
    );
}


let sliderEight = {
    container: '.my-slider-eight-lvl',
    items: 3,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls8",
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 3,
        }
    },
}

if (document.querySelector('.my-slider-eight-lvl') !== null) {
    var slider = tns(
        sliderEight
    );
}

let sliderOneGoodsCart = {
    container: '.my-slider-one-goods-cart',
    items: 1,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls-one-goods-cart",
}

if (document.querySelector('.my-slider-one-goods-cart') !== null) {
    var slider = tns(
        sliderOneGoodsCart
    );
}

let sliderFiveCart = {
    container: '.my-slider-five-cart',
    items: 5,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls-five-cart",
    responsive: {
        0: {
            items: 2,
        },

        768: {
            items: 3,
        },
        1024: {
            items: 5,
        },
    },
}

if (document.querySelector('.my-slider-five-cart') !== null) {
    var slider = tns(
        sliderFiveCart
    );
}

let sliderSearche = {
    container: '.searche-five-cart',
    items: 5,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls-searce",
    responsive: {
        0: {
            items: 2,
        },

        768: {
            items: 3,
        },
        1024: {
            items: 5,
        },
    },
}

if (document.querySelector('.searche-five-cart') !== null) {
    var slider = tns(
        sliderSearche
    );
}

let sliderСarusel = {
    container: '.my-slider-carusel',
    items: 3,
    controls: false,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    mode: "carousel",
    autoWidth: true,
    viewportMax: 'integer'

}

if (document.querySelector('.my-slider-carusel') !== null) {
    var slider = tns(
        sliderСarusel
    );
}
if (document.querySelector('.cart-elp') !== null) {
    // tabs in pages comparison
    let buttonRun = document.querySelector('.button-run');
    let cartRun = document.querySelector('.cart-run');

    let buttonElp = document.querySelector('.button-elp');
    let cartElp = document.querySelector('.cart-elp');

    cartElp.style.display = 'none';

    buttonRun.addEventListener("click", showCartRun);
    buttonElp.addEventListener("click", showCartElp);

    function showCartRun() {
        cartElp.style.display = 'none';
        cartRun.style.display = 'flex';
    }

    function showCartElp() {
        cartElp.style.display = 'flex';
        cartRun.style.display = 'none';
    }
}