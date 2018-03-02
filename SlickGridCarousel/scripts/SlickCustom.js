$(document).ready(function () {
    // docs : http://kenwheeler.github.io/slick/


    var uniqueWrapper = document.querySelectorAll('[data-uniqueID]');

    $('[data-uniqueID]').each(function () {

    //$.each(uniqueWrapper, function () {
        var wrapper = $(this);

        var sliderFor = wrapper.find('.slider-for'); // slider-for element
        var sliderNav = wrapper.find('.slider-nav'); // slider-nav element

        //settings
        var AutoPlay = wrapper.attr("data-slickAutoPlay");// get autoplay value.
        var PlaySpeed = wrapper.attr("data-slickPlaySpeed"); // get playspeed value.
        var ShowNav = wrapper.attr("data-showNav"); // Show images below main, as navigation


        if (AutoPlay === 'True') {
            // auto play enabled
            if (ShowNav === 'True') {
                sliderFor.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                    infinite: true,
                    autoplay: AutoPlay,
                    autoplaySpeed: PlaySpeed,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    pauseOnDotsHover: true,
                    draggable: true,
                    adaptiveHeight: true
                });
            } else {
                sliderFor.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    dots:true,
                    infinite: true,
                    autoplay: AutoPlay,
                    autoplaySpeed: PlaySpeed,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    pauseOnDotsHover: true,
                    draggable: true,
                    adaptiveHeight: true
                });
            }

        } else {
            if (ShowNav === 'True') {
                sliderFor.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                    infinite: true,
                    draggable: true,
                    adaptiveHeight: true
                });
            } else {
                sliderFor.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    dots:true,
                    infinite: true,
                    draggable: true,
                    adaptiveHeight: true
                });
            }
        }

        if (ShowNav === 'True') {
            
            //navigation
            sliderNav.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots:true,
                centerMode: true,
                arrows: false,
                focusOnSelect: true,
                infinite: true,
                lazyLoad: 'progressive',
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    });
});