'use strict';

$('.owl-carousel').owlCarousel({
    Type: Boolean,
    Default: false,
    loop:true,
    autoWidth:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});