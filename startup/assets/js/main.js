/**
 * Created by Shamim on 10/11/2015.
 */
;
(function ($) {

    $(function () {

        jQuery(document).ready(function () {




            // Team Carousel
            // =========================
            $("#owl-demo").owlCarousel({

                //autoPlay: 3000, //Set AutoPlay to 3 seconds

                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                navigationText: ['<i class="fa fa-angle-left"></i> ', '<i class="fa fa-angle-right"></i>']

            });

            //  Owl Carousel
            //==============================
            $("#owl-testimonial").owlCarousel({

                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: 10000

                // "singleItem:true" is a shortcut for:
                // items : 1,
                // itemsDesktop : false,
                // itemsDesktopSmall : false,
                // itemsTablet: false,
                // itemsMobile : false

            });


            //  Parallax Background
            //==============================
            $.stellar();


            //  isoTop
            //==============================

            $('.works-category li a').click(function () {
                $('.works-category .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            var $container = $('.employers-area');
            $container.isotope({
                filter: '.welcome',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });



            // Header Effect
            //==============================
            $(".header").affix({
                offset: {
                    top: 100,
                    bottom: function () {
                        return (this.bottom = $('.copyright').outerHeight(true))
                    }
                }
            })



            //Home Scree Optimize
            //==============================
            (function () {

                var slideHeight = $(window).height();
                $('#home').css('height', slideHeight);

                $(window).resize(function () {
                    $('#home').css('height', slideHeight);
                });

            }());




        });
        //Document Ready End.


        //  Typed JS
        //====================================
                $(".element").typed({
                    strings: ["STARTUP!", "OUR SITE!"],
                    typeSpeed: 300,
                    loop: true,
                    cursorChar: "|",
                });


        // Smooth Scroll
        //====================================
        smoothScroll.init({
            speed: 1000, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
            offset: 90, // Integer. How far to offset the scrolling anchor location in pixels
            callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
            callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
        });


        //Reveal JS
        //================================
        window.scrollReveal = new scrollReveal();


        $(document).ready(function() {
            if ($(window).width() < 768)
            {
                $(".navbar-nav li a").click(function(event) {
                    $(".navbar-collapse").collapse('hide');
                });
            }
        });




    });
})(jQuery);
