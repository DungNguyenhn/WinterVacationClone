const S = document.querySelector.bind(document)
const SS = document.querySelectorAll.bind(document)

const navListItems = SS('.navbar__list-item');
const overlay = S('.nav__slide-area-overplay');
const overlaySearch = S('.overlay-search')
const slideArea = S('.header__block-icon-item:last-child');
const searchOverlayIcon = S('.header__block-icon-item:nth-child(2)');
const formSearchOverlay = S('.navbar__search-overlay');
const closeFormSearch = S('.overlay-search-icon-times i');
const navbarSlideArea = S('.navbar__slide-area');
const closeSlideArea = S('.navbar__slide-area-icon i');
const nextSlideBtn = S('.slider__btn-next');
const prevSlideBtn = S('.slider__btn-previous');
const tourSlider = S('.tour-slider');
const videoBtn = S('.video__intro-info-btn');
const videoIntro = S('.video__intro-video');
const iframeTag = videoIntro.querySelector('iframe');
const iconNavbarMobile = S('.header__mobile-icon-nav');
const navbarMobile = S('.header__mobile-navbar-wrap');
const listItemNavbarMobile = SS('.header__mobile-navbar-list-item');
const listItemNavbarMobileLink = SS('.header__mobile-navbar-list-item-link');
const listItemNavBarSubmenuLink = 
        SS('.navbar__sub-menu-mobile-list-item.have-sub-menu');
const headerMobileOverlay = S('.header__mobile-overlay-form');
const iconFormMobile = S('.header__mobile-icon-login');
const formLoginMobile = S('.header__mobile-overlay-form-wrap');
const formMobileTitle = SS('.header__mobile-form-title-navigation');
const formActive =  SS('.header__mobile-form');
var autoPlaySlide;

window.onload = (e)=>{
    S('body div.preload').classList.remove('preload');
}
for(let i=0;i<navListItems.length;i++){
    let timeOut;
    const subMenu = navListItems[i].querySelector('.navbar__sub-menu');
    navListItems[i].onmouseenter=(e)=>{
        timeOut = setTimeout(() => {
            subMenu.classList.add('overflow-visible');
        }, 600);
    }
    navListItems[i].onmouseleave=(e)=>{
        clearTimeout(timeOut);
        subMenu.classList.remove('overflow-visible');
    }
}
searchOverlayIcon.onclick=(e)=>{
    overlaySearch.classList.add('trasition-overlay-search');
}

overlaySearch.onclick=(e)=>{
    overlaySearch.classList.remove('trasition-overlay-search');
    e.stopPropagation();
}
formSearchOverlay.onclick=(e)=>{
    e.stopPropagation();
}
closeFormSearch.onclick=(e)=>{
    overlaySearch.classList.remove('trasition-overlay-search');
    e.stopPropagation();
}
overlay.onclick=(e)=>{
    overlay.classList.remove('visible');
    navbarSlideArea.classList.remove('navbar__slide-area-transfrom');
    e.stopPropagation();
}
slideArea.onclick=(e)=>{
    overlay.classList.add('visible');
    navbarSlideArea.classList.add('navbar__slide-area-transfrom');
}
closeSlideArea.onclick=(e)=>{
    navbarSlideArea.classList.remove('navbar__slide-area-transfrom');
    overlay.classList.remove('visible');
    e.stopPropagation();
}
nextSlideBtn.onclick = (e)=>{
    const slideIsActive = S('.slider__img-content.slider-active');
    const numberSlide = Number(slideIsActive.dataset.index);
    let nextNumberSlide = numberSlide+1;
    if(nextNumberSlide>2){
        nextNumberSlide=1;
    }
    slideIsActive.classList.remove('slider-active');
    const nextSlide = S(`[data-index="${nextNumberSlide}"]`);
    nextSlide.classList.add('slider-active');
    clearInterval(autoPlaySlide);
    repeater();
}
prevSlideBtn.onclick = (e)=>{
    const slideIsActive = S('.slider__img-content.slider-active');
    const numberSlide = Number(slideIsActive.dataset.index);
    let nextNumberSlide = numberSlide-1;
    if(nextNumberSlide<1){
        nextNumberSlide=2;
    }
    slideIsActive.classList.remove('slider-active');
    const nextSlide = S(`[data-index="${nextNumberSlide}"]`);
    nextSlide.classList.add('slider-active');
    clearInterval(autoPlaySlide);
    repeater();
}
function slideTimer(){
    const slideIsActive = S('.slider__img-content.slider-active');
    const numberSlide = Number(slideIsActive.dataset.index);
    let nextNumberSlide = numberSlide-1;
    if(nextNumberSlide<1){
        nextNumberSlide=2;
    }
    slideIsActive.classList.remove('slider-active');
    const nextSlide = S(`[data-index="${nextNumberSlide}"]`);
    nextSlide.classList.add('slider-active');
}
let repeater = function(){
     autoPlaySlide = setInterval(slideTimer,4000);
}
repeater();

videoBtn.onclick = (e)=>{
    videoIntro.style.display = 'flex';
    iframeTag.setAttribute('src', 'https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1');
}
videoIntro.onclick = (e)=>{
    videoIntro.style.display = 'none';
    videoIntro.querySelector('iframe').setAttribute('src' , '');
    e.stopPropagation();
}

// Mobile 
iconNavbarMobile.onclick = (e) =>{
    navbarMobile.classList.toggle('active');
}
for(let i=0;i<listItemNavbarMobile.length;i++){
    listItemNavbarMobile[i].addEventListener('click',(e)=>{
        listItemNavbarMobileLink[i].classList.toggle('active');
    })
    listItemNavbarMobile[i].addEventListener('click',(e)=>{
        const listItemNavbarMobileIcon = 
            listItemNavbarMobile[i].querySelector('.header__mobile-navbar-list-item-link-icon');
        listItemNavbarMobileIcon.classList.toggle('active');
    })
    listItemNavbarMobile[i].addEventListener('click',(e)=>{
        const subMenuOne = listItemNavbarMobile[i].querySelector('.navbar__sub-menu-mobile');
        subMenuOne.classList.toggle('active');
    })
    listItemNavbarMobile[i].addEventListener('click',(e)=>{
        for(let j=0;j<listItemNavbarMobile.length;j++){
            if(j!==i){
                listItemNavbarMobileLink[j].classList.remove('active');
                const listItemNavbarMobileIcon = 
                    listItemNavbarMobile[j].querySelector('.header__mobile-navbar-list-item-link-icon');
                const subMenuOne = listItemNavbarMobile[j].querySelector('.navbar__sub-menu-mobile');
                subMenuOne.classList.remove('active');
                listItemNavbarMobileIcon.classList.remove('active');
            }
        }
    })
}
for(let i=0;i<listItemNavbarMobileLink.length;i++){
    listItemNavbarMobileLink[i].onclick = (e)=>{
        e.preventDefault();
    }
}
for(let i=0;i<listItemNavBarSubmenuLink.length;i++){
    const aTag = listItemNavBarSubmenuLink[i].querySelector('.navbar__sub-menu-mobile-list-item-link.have-sub-menu');
    aTag.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
    })
    aTag.addEventListener('click',(e)=>{
        listItemNavBarSubmenuLink[i].querySelector('.navbar__sub-menu-mobile.have-one-sub-menu').classList.toggle('active');
    })
    aTag.addEventListener('click',(e)=>{
        listItemNavBarSubmenuLink[i].querySelector('.header__mobile-navbar-list-item-link-icon').classList.toggle('active');
        aTag.classList.toggle('active');
    });
}
iconFormMobile.onclick = (e)=>{
    headerMobileOverlay.classList.add('active');
}
headerMobileOverlay.onclick = (e)=>{
    headerMobileOverlay.classList.remove('active');
}
formLoginMobile.onclick = (e)=>{
    e.stopPropagation();
}
for(let i=0;i<formMobileTitle.length;i++){
    formMobileTitle[i].onclick = (e)=>{
        e.target.classList.add('active');
        formActive[i].classList.add('active');
        for(let j=0;j<formMobileTitle.length;j++){
            if(i!==j){
                formMobileTitle[j].classList.remove('active');
                formActive[j].classList.remove('active');
            }
        }
    }
}

