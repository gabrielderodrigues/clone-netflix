$('.owl-carousel').owlCarousel({
    loop:true, // Consegue navegar de forma infinita
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})