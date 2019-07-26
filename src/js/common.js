//accordion adaptive maxWidth
if (document.querySelector('.accordion-wrapper-desctop') !== null) {
    const accordionDesctop = document.querySelector('.accordion-wrapper-desctop');
    const accordionMobile = document.querySelector('.accordion-wrapper-mobile');

    const maxWidth = window.matchMedia('(max-width: 800px)');

    if (maxWidth.matches) {
        accordionDesctop.style.display = 'none';
    } else {
        accordionMobile.style.display = 'none';
    }
}


if (document.querySelector('.accordion-mobile-container') !== null) {


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

}
// all sliders

if (document.querySelector('.my-slider-first-lvl') !== null) {
    var slider = tns({
        container: '.my-slider-first-lvl',
        items: 3,
        touch: true,
        preventScrollOnTouch: "auto",
        loop: true,
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
    items: 3.3,
    touch: true,
    loop: true,
    mouseDrag: true,
    swipeAngle: 15,
    speed: 400,
    mode: "carousel",
    autoWidth: true,
    controlsContainer: "#customize-controls-carusel",
}

if (document.querySelector('.my-slider-carusel') !== null) {
    var slider = tns(
        sliderСarusel
    );
}


// comparison isActive

if (document.querySelector('.cart-elp') !== null) {
    // if (document.querySelector('.main-comparison-nav') !== null) {
    // tabs in pages comparison

    // const buttonsContainer = document.querySelector('.main-comparison-nav');
    // const tabs = document.querySelector('.main-comparison');

    // console.log(buttonsContainer);

    // buttonsContainer.addEventListener('click', event => {
    //     let index = event.target.closest('.main-comparison-nav-item').dataset.value;
    //     console.log(index);
    //     console.log(event.target);
    //     tabs.querySelector('.isActive').classList.remove('isActive');
    //     tabs.querySelector('.main-comparison-goods--' + index).classList.add('isActive');
    // });



    let buttonRun = document.querySelector('.button-run');
    let buttonElp = document.querySelector('.button-elp');
    let buttonBike = document.querySelector('.button-bike');
    let buttonStep = document.querySelector('.button-step');


    let cartElp = document.querySelector('.cart-elp');
    let cartRun = document.querySelector('.cart-run');
    let cartBike = document.querySelector('.cart-bike');
    let cartStep = document.querySelector('.cart-step');

    buttonRun.classList.add('isActive');
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
        buttonRun.classList.add('isActive');
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
        buttonElp.classList.add('isActive');
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
        buttonBike.classList.add('isActive');
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
        buttonStep.classList.add('isActive');
    }
}



// modal header

const burgerModalOpen = document.querySelector('.burger-modal-open');
const burgerModalClose = document.querySelector('.burger-modal-close');

// position: fixed;
const backgroundFon = document.querySelector('.burger-modal');
const modalNav = document.querySelector('.modal-content');
const bodyFixed = document.querySelector('body');
const mainFixed = document.querySelector('main');

burgerModalClose.addEventListener("click", closeModal);
burgerModalOpen.addEventListener("click", openModal);

function closeModal() {
    backgroundFon.style.opacity = '0';
    backgroundFon.style.zIndex = '-1';
    modalNav.style.position = "absolute";
    modalNav.style.opacity = "-1";
    bodyFixed.style.paddingRight = "0"
    bodyFixed.style.zIndex = "auto"
    // bodyFixed.style.overflow = "auto"
    // bodyFixed.style.pointerEvents = "auto"

    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

}

function openModal() {
    backgroundFon.style.opacity = '1';
    backgroundFon.style.zIndex = '1';
    modalNav.style.position = "absolute";
    modalNav.style.opacity = "1";
    bodyFixed.style.zIndex = "-1"
    bodyFixed.style.paddingRight = "6px"
    // bodyFixed.style.overflow = "hidden"
    // bodyFixed.style.pointerEvents = "none"

    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
}
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

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
const arrowMenuLink = document.querySelector('.header-arrow-menu-nav-a');

// arrowButtonPower.addEventListener("mouseenter", showArrowMenu);
arrowButton.addEventListener("mouseenter", showArrowMenu);
arrowButton.addEventListener("mouseenter", showArrowMenu);
arrowMenu.addEventListener("mouseleave", closeMenu);
arrowButtonPower.addEventListener("mouseenter", showArrowMenuPower);
function closeMenu() {
    arrowMenu.style.opacity = '0';
    arrowMenu.style.zIndex = '-1';
    arrowButton.classList.remove('showMenu');
    arrowButtonPower.classList.remove('showMenu');
    a = true;
}

let a = true;
let b = true;

function showArrowMenu() {
    if (a) {
        arrowMenu.style.opacity = '1';
        arrowMenu.style.zIndex = '2';
        arrowButton.classList.toggle('showMenu');
        a = false;
        if (b == false) {
            arrowMenu.style.opacity = '1';
            arrowMenu.style.zIndex = '2';
            arrowButtonPower.classList.remove('showMenu');
            b = true;
            a = false;
        }
    } else {
        arrowMenu.style.opacity = '0';
        arrowMenu.style.zIndex = '-1'
        arrowButton.classList.toggle('showMenu');
        a = true;
    }
}


function showArrowMenuPower() {
    if (b) {
        arrowMenu.style.opacity = '1';
        arrowMenu.style.zIndex = '2';
        arrowButtonPower.classList.toggle('showMenu');
        b = false;
        if (a == false) {
            arrowMenu.style.opacity = '1';
            arrowMenu.style.zIndex = '2';
            arrowButton.classList.remove('showMenu');
            a = true;
            b = false;
        }
    } else {
        arrowButtonPower.classList.remove('showMenu');
        arrowMenu.style.opacity = '0';
        arrowMenu.style.zIndex = '-1';
        b = true;
    }
}


// input form request footer

const labelFormTel = document.querySelector('.label-tel');
const labelFormEmail = document.querySelector('.label-email');
const labelFormCity = document.querySelector('.label-city');
const labelFormDesc = document.querySelector('.label-desc');

const inputFormTel = document.querySelector('.input-tel');
const inputFormEmail = document.querySelector('.input-email');
const inputFormCity = document.querySelector('.input-city');
const inputFormDesc = document.querySelector('.input-desc');


//goods cart button send request
if (document.querySelector('.button-send-request-button') !== null) {
    const buttonGoodsCartSendRequest = document.querySelector('.button-send-request-button');
    const footer = document.querySelector('.footer');

    buttonGoodsCartSendRequest.addEventListener("click", downToBottom);

    function downToBottom() {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
}


// arrow-up
if (document.querySelector('.arrow-up') !== null) {
    const bottonToUp = document.querySelector('.arrow-up');

    bottonToUp.addEventListener("click", upToTop);

    function upToTop() {
        bodyFixed.scrollIntoView({ behavior: 'smooth' });
    }
}

let basicScrollTop = function () {
    const arrowUp = document.querySelector('.arrow-up');
    let btnReveal = function () {
        if (window.scrollY >= 800) {
            arrowUp.style.opacity = '1';
        } else {
            arrowUp.style.opacity = '0';
        }
    };
    window.addEventListener('scroll', btnReveal);
};
basicScrollTop();


// slider goods page
if (document.querySelector('.first-prev') !== null) {
    const buttonFirst = document.querySelector(".first-prev");
    const buttonSecond = document.querySelector(".second-prev");
    const buttonLast = document.querySelector(".last-prev");

    const imgFirst = document.querySelector(".first")
    const imgSecond = document.querySelector(".second")
    const imgLast = document.querySelector(".last")

    buttonFirst.addEventListener("click", showImgFirst);

    buttonSecond.addEventListener("click", showImgSecond);

    buttonLast.addEventListener("click", showImgLast);

    function showImgFirst() {
        imgFirst.classList.add("active");
        imgSecond.classList.remove("active");
        imgLast.classList.remove("active");

        buttonFirst.classList.add("active-prev");
        buttonSecond.classList.remove("active-prev");
        buttonLast.classList.remove("active-prev");
    }
    function showImgSecond() {
        imgFirst.classList.remove("active");
        imgSecond.classList.add("active");
        imgLast.classList.remove("active");

        buttonFirst.classList.remove("active-prev");
        buttonSecond.classList.add("active-prev");
        buttonLast.classList.remove("active-prev");
    }
    function showImgLast() {
        imgFirst.classList.remove("active");
        imgSecond.classList.remove("active");
        imgLast.classList.add("active");

        buttonFirst.classList.remove("active-prev");
        buttonSecond.classList.remove("active-prev");
        buttonLast.classList.add("active-prev");
    }

}

// popup service window

if (document.querySelector('.button-subscribe-button') !== null) {

    const buttonSendService = document.querySelector('.button-subscribe-button');
    const modalServiceWindowClose = document.querySelector('.window-standart-modal-button');
    const modalServiceWindow = document.querySelector('.standart-modal');

    // show popup
    function modalServiceShow() {
        modalServiceWindow.classList.add('standart-modal-buton');
    }

    // close popup
    function modalServiceClose() {
        modalServiceWindow.classList.remove('standart-modal-buton');
    }

    // button close popup
    modalServiceWindowClose.addEventListener("click", modalServiceClose);
    // button open popup
    buttonSendService.addEventListener("click", modalServiceShow);
}



if (document.querySelector('.accordionWrapper') !== null) {
    // up to block
    const accordionWrapperMobile = document.querySelector('.accordionWrapper');
    const accordionWrapperMobileOne = document.querySelector('.one');
    const accordionWrapperMobileTwo = document.querySelector('.two');
    const accordionWrapperMobileThree = document.querySelector('.three');

    // accordionWrapperMobileTwo.addEventListener("click", upToAccordionWrapper);
    // accordionWrapperMobileThree.addEventListener("click", upToAccordionWrapper);

    // function upToAccordionWrapper() {
    //     accordionWrapperMobile.scrollIntoView();
    // };



    //accordion
    const accItem = document.getElementsByClassName('accordionItem');
    const accHD = document.getElementsByClassName('accordionItemHeading');


    accordionWrapperMobileOne.addEventListener("click", OneAccordionOpen);
    accordionWrapperMobileTwo.addEventListener("click", twoAccordionOpen);
    accordionWrapperMobileThree.addEventListener("click", threeAccordionOpen);

    function OneAccordionOpen() {
        accordionWrapperMobileOne.classList.toggle('close');
        accordionWrapperMobileOne.classList.toggle('open');
    }

    function twoAccordionOpen() {
        accordionWrapperMobileTwo.classList.toggle('close');
        accordionWrapperMobileTwo.classList.toggle('open');
    }

    function threeAccordionOpen() {
        accordionWrapperMobileThree.classList.toggle('close');
        accordionWrapperMobileThree.classList.toggle('open');
    }


    // открывать один аккордион и авто закрывать другой (нельзя закрыть все)
    // for (i = 0; i < accHD.length; i++) { 
    //     accHD[i].addEventListener('click', toggleItem, false);
    // }

    // function toggleItem() {

    //     for (i = 0; i < accItem.length; i++) {
    //         accItem[i].className = 'accordionItem close';
    //     }

    //     let itemClass = this.parentNode.className;
    //     if (itemClass == 'accordionItem close') {
    //         this.parentNode.className = 'accordionItem open';
    //     }
    // }



}


if (document.querySelector('.box-box') !== null){
    function boxInFooter() {
        const boxTitle = document.querySelectorAll('.box__title');
        const boxText = document.querySelectorAll('.box__text');

        maxLengthStr(boxText[1].innerHTML, 55);

        // for (let i = 0; i < boxTitle.length; i++) {
        //     maxLengthStr(boxTitle[i], 55);
        //     maxLengthStr(boxText[i], 150);
        // }
    }

    function maxLengthStr(str, maxlength) {
        if (str.length > maxlength) {
            console.log("YEEEEEEEEEEP!");
            return str.slice(0, maxlength - 3) + '...';
        }
        console.log("NOOOOOOOOOOOO!");
        return str;
    }

 boxInFooter();
}
