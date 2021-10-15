const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navListItems = $$('.navbar__list-item');
const overlay = $('.nav__slide-area-overplay');
const overlaySearch = $('.overlay-search')
const slideArea = $('.header__block-icon-item:last-child');
const searchOverlayIcon = $('.header__block-icon-item:nth-child(2)');
const formSearchOverlay = $('.navbar__search-overlay');
const closeFormSearch = $('.overlay-search-icon-times i');
const navbarSlideArea = $('.navbar__slide-area');
const closeSlideArea = $('.navbar__slide-area-icon i');
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