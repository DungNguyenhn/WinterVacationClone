function tourSliderEffect(){
    $('.tour-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            dots:true,
            draggable: true,
            arrows:false,
            responsive: 
                [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        draggable: true,
                        arrows:false,
                        autoplay:false
                        }
                    },
                    {
                    breakpoint: 739,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        draggable: true,
                        arrows:false,
                        autoplay:false
                        }
                    },
                    {
                    breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            draggable: true,
                            arrows:false,
                            autoplay:false
                        },
                    }
                ],
            });
}
function reviewSliderEffect(){
    $('.review__customer-list').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            dots:true,
            draggable: true,
            arrows:false,
            appendDots: $('.review__customer-dot'),
            responsive: 
                [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        draggable: true,
                        arrows:false,
                        autoplay:false
                        }
                    },
                    {
                    breakpoint: 739,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        draggable: true,
                        arrows:false,
                        autoplay:false
                        }
                    },
                ],
            });
}
function humanSliderEffect(){
    $('.our-team__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            dots:false,
            draggable: true,
            arrows:false,
            pauseOnFocus:false,
            responsive: 
                [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        draggable: true,
                        arrows:false,
                        autoplay:false
                        }
                    },
                    {
                        breakpoint: 739,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            draggable: true,
                            arrows:false,
                            autoplay:false
                            }
                        },
                ],
            });
}
$(document).ready(function () {
    tourSliderEffect();
    reviewSliderEffect();
    humanSliderEffect();
});
