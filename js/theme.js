;(function($){
    "use strict"

    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 3,
                    },
                }
            })
        }
    }
    testimonials_slider();
	
    /*----------------------------------------------------*/
    /*  Slkills
    /*----------------------------------------------------*/
    $(function () {
        $(".counter").counterUp({
            delay: 10,
            time: 2000,
        });
    });
})(jQuery)
    