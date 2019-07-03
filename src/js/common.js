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

let sliderSearchePage = {
    container: '.search-page-five-cart',
    items: 5,
    touch: true,
    preventScrollOnTouch: "auto",
    loop: true,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsContainer: "#customize-controls-search-page",
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

if (document.querySelector('.search-page-five-cart') !== null) {
    var slider = tns(
        sliderSearchePage
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


// comparison isActive

if (document.querySelector('.cart-elp') !== null) {
    // tabs in pages comparison
    let buttonRun = document.querySelector('.button-run');
    let buttonElp = document.querySelector('.button-elp');
    let buttonBike = document.querySelector('.button-bike');
    let buttonStep = document.querySelector('.button-step');


    let cartElp = document.querySelector('.cart-elp');
    let cartRun = document.querySelector('.cart-run');
    let cartBike = document.querySelector('.cart-bike');
    let cartStep = document.querySelector('.cart-step');

    buttonRun.classList.toggle('isActive');
    cartElp.style.display = 'none';
    cartBike.style.display = 'none';
    cartStep.style.display = 'none';

    buttonRun.addEventListener("click", showCartRun);
    buttonElp.addEventListener("click", showCartElp);
    buttonBike.addEventListener("click", showCartBike);
    buttonStep.addEventListener("click", showCartStep);

    function showCartRun() {
        cartElp.style.display = 'none';
        cartBike.style.display = 'none';
        cartStep.style.display = 'none';
        cartRun.style.display = 'flex';
        buttonRun.classList.toggle('isActive');
        buttonElp.classList.remove('isActive');
        buttonBike.classList.remove('isActive');
        buttonStep.classList.remove('isActive');
    }

    function showCartElp() {
        cartElp.style.display = 'flex';
        cartBike.style.display = 'none';
        cartStep.style.display = 'none';
        cartRun.style.display = 'none';
        buttonRun.classList.remove('isActive');
        buttonElp.classList.toggle('isActive');
        buttonBike.classList.remove('isActive');
        buttonStep.classList.remove('isActive');
    }
    function showCartBike() {
        cartElp.style.display = 'none';
        cartBike.style.display = 'flex';
        cartStep.style.display = 'none';
        cartRun.style.display = 'none';
        buttonRun.classList.remove('isActive');
        buttonElp.classList.remove('isActive');
        buttonBike.classList.toggle('isActive');
        buttonStep.classList.remove('isActive');
    }

    function showCartStep() {
        cartElp.style.display = 'none';
        cartBike.style.display = 'none';
        cartStep.style.display = 'flex';
        cartRun.style.display = 'none';
        buttonRun.classList.remove('isActive');
        buttonElp.classList.remove('isActive');
        buttonBike.classList.remove('isActive');
        buttonStep.classList.toggle('isActive');
    }
}



// modal header

const burgerModalOpen = document.querySelector('.burger-modal-open');
const burgerModalClose = document.querySelector('.burger-modal-close');

// position: fixed;
const backgroundFon = document.querySelector('.burger-modal');
const modalNav = document.querySelector('.modal-content');

burgerModalClose.addEventListener("click", closeModal);
burgerModalOpen.addEventListener("click", openModal);

function closeModal() {
    backgroundFon.style.opacity = '0';
    backgroundFon.style.zIndex = '-1';
    modalNav.style.transform = "translateX(50px)";
    modalNav.style.position = "absolute";
    backgroundFon.style.position = "absolute";
}

function openModal() {
    backgroundFon.style.opacity = '1';
    backgroundFon.style.zIndex = '1';
    modalNav.style.transform = "translateX(0px)";
    modalNav.style.position = "fixed";
    backgroundFon.style.position = "fixed";
}


// modal header sub menu
const menuCardioButton = document.querySelector('.no-desctop-cardio');
const menuPowerButton = document.querySelector('.no-desctop-power');

const menuCardio = document.querySelector('.sum-menu-cardio');
const menuPower = document.querySelector('.sum-menu-power');

const arrowCardio = document.querySelector('.modal-nav-no-desctop-menu-svg');
const arrowPower = document.querySelector('.modal-nav-no-desctop-menu-svg-power');

menuCardioButton.addEventListener("click", showSubMenu);
function showSubMenu() {
    if (a) {
        menuCardio.style.opacity = '1';
        menuCardio.style.position = 'static';
        menuCardio.style.zIndex = '1';
        menuCardio.style.transform = "translateY(0px)";
        menuCardio.style.transition = "0.2s linear";
        a = false;
        if (b == false) {
            menuPower.style.opacity = '0';
            menuPower.style.position = 'absolute';
            menuPower.style.zIndex = '-1';
            menuPower.style.transform = "translateY(-20px)";
            menuPower.style.transition = "0s linear";
            b = true;
        }
    } else {
        menuCardio.style.opacity = '0';
        menuCardio.style.position = 'absolute';
        menuCardio.style.zIndex = '-1';
        menuCardio.style.transform = "translateY(-20px)";
        menuCardio.style.transition = "0s linear";
        a = true;
    }
}

menuPowerButton.addEventListener("click", showSubMenuPower);
function showSubMenuPower() {
    if (b) {
        menuPower.style.opacity = '1';
        menuPower.style.position = 'static';
        menuPower.style.zIndex = '1';
        menuPower.style.transform = "translateY(0px)";
        menuPower.style.transition = "0.2s linear";
        b = false;
        if (a == false) {
            menuCardio.style.opacity = '0';
            menuCardio.style.position = 'absolute';
            menuCardio.style.zIndex = '-1';
            menuCardio.style.transform = "translateY(-20px)";
            menuCardio.style.transition = "0s linear";
            a = true;
        }
    } else {
        menuPower.style.opacity = '0';
        menuPower.style.position = 'absolute';
        menuPower.style.zIndex = '-1';
        menuPower.style.transform = "translateY(-20px)";
        menuPower.style.transition = "0s linear";
        b = true;
    }
}




//header arrow menu

const arrowButtonPower = document.querySelector('.header-arrow-menu-power');
const arrowButton = document.querySelector('.header-arrow-menu');
const arrowMenu = document.querySelector('.header-arrow-menu-nav');

arrowButtonPower.addEventListener("mouseover", showArrowMenu);
arrowButton.addEventListener("mouseover", showArrowMenu);
let a = true;
let b = true;
function showArrowMenu() {
    if (a) {
        arrowMenu.style.opacity = '1';
        arrowMenu.style.zIndex = '1';
        a = false;
    } else {
        arrowMenu.style.opacity = '0';
        arrowMenu.style.zIndex = '-1';
        a = true;
    }


}

// request form footer

const labelFormTel = document.querySelector('.label-tel');
const labelFormEmail = document.querySelector('.label-email');
const labelFormCity = document.querySelector('.label-city');
const labelFormDesc = document.querySelector('.label-desc');

const inputFormTel = document.querySelector('.input-tel');
const inputFormEmail = document.querySelector('.input-email');
const inputFormCity = document.querySelector('.input-city');
const inputFormDesc = document.querySelector('.input-desc');

