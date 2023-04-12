(function ($) {
    "use strict";
    
    /* Notification */
    $('.notification-close button').on('click', function() {
        $('.notification-section').slideUp();
    });
    
    /* Newsletter */
    $('.newsletter-close button').on('click', function() {
        $('.newsletter-section').slideUp();
    });
    
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $('.sticky-bar');
    var $window = $(window);
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="la la-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /*------ SVG img ----*/
    SVGInject(document.querySelectorAll('img.injectable'), {});
    
    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    miniCart();
    
    
    /*====== Offcanvas additional menu ======*/
    function offcanvasAdditionalMenu() {
        var navbarTrigger = $('.additional-menu-active'),
            endTrigger = $('.additional-menu-close'),
            container = $('.offcanvas-additional-menu-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay-2"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('active');
            wrapper.addClass('overlay-active-2');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('active');
            wrapper.removeClass('overlay-active-2');
        });
        
        $('.body-overlay-2').on('click', function() {
            container.removeClass('active');
            wrapper.removeClass('overlay-active-2');
        });
    };
    offcanvasAdditionalMenu();
    
    
    /*====== Mobile menu ======*/
    function offcanvasMainlMenu() {
        var navbarTrigger = $('.mobile-menu-active'),
            endTrigger = $('.mobile-menu-close'),
            container = $('.offcanvas-mobile-menu-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay-4"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('active');
            wrapper.addClass('overlay-active-4');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('active');
            wrapper.removeClass('overlay-active-4');
        });
        
        $('.body-overlay-4').on('click', function() {
            container.removeClass('active');
            wrapper.removeClass('overlay-active-4');
        });
    };
    offcanvasMainlMenu();
    
    
    /*====== Offcanvas login register active ======*/
    function offcanvasLoginRegister() {
        var navbarTrigger = $('.login-register-btn-active-2'),
            endTrigger = $('.login-register-menu-close'),
            container = $('.offcanvas-login-register-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay-3"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('active');
            wrapper.addClass('overlay-active-3');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('active');
            wrapper.removeClass('overlay-active-3');
        });
        
        $('.body-overlay-3').on('click', function() {
            container.removeClass('active');
            wrapper.removeClass('overlay-active-3');
        });
    };
    offcanvasLoginRegister();
    
    
    /*====== SidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $('.search-active'),
            endTriggersearch = $('.search-close'),
            container = $('.main-search-active');
        
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('search-visible');
        });
        
        endTriggersearch.on('click', function() {
            container.removeClass('search-visible');
        });
        
    };
    sidebarSearch();
    
    
    /*====== Offcanvas login register active ======*/
    function Loginregister() {
        var loginregisterTrigger = $('.login-register-btn-active'),
            endTriggerloginregister = $('.login-register-close'),
            container = $('.login-register-content-active');
        
        loginregisterTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('login-register-visible');
        });
        
        endTriggerloginregister.on('click', function() {
            container.removeClass('login-register-visible');
        });
        
    };
    Loginregister();
    
    
    /*--------------------------------
        Hero slider active 1
    -----------------------------------*/
    $('.hero-slider-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });
    
    /*--------------------------------
        Shop banner active
    -----------------------------------*/
    $('.shop-banner-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="shop-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="shop-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });
    
    /*-------------------------
        Hero slider active 2
    --------------------------*/
    var $status = $('.pagingInfo');
    var $slickElement = $('.hero-slider-active-2');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text('' + i + ' / ' + '' +  slick.slideCount);
    });

    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="slider-icon-down"><i class="icon-arrow-down"></i></span>',
        nextArrow: '<span class="slider-icon-up"><i class="icon-arrow-up"></i></span>',
    });
    
    
    /*------ Brand logo active 1 ----*/
    $('.brand-logo-active-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*------ Brand logo active 2 ----*/
    $('.brand-logo-active-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*------ Brand logo active 3 ----*/
    $('.brand-logo-active-3').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        rows: 2,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="las la-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*------ Categori brand logo ----*/
    $('.categori-brand-logo').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*------ Categori product slider ----*/
    $('.categori-product-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Product slider active 2 ----*/
    $('.product-slider-active-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Product slider active 3 ----*/
    $('.product-slider-active-3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="las la-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    /*------ Product slider active 4 ----*/
    $('.product-slider-active-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="las la-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Categories slider active ----*/
    $('.categories-slider-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="icon-arrow-left icons"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="icon-arrow-right icons"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    
    /*------ Categories slider active 2 ----*/
    $('.categories-slider-active-2').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="icon-arrow-left icons"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="icon-arrow-right icons"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Blog active 2 ----*/
    $('.blog-active-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="las la-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    /*------ Blog active 1 ----*/
    $('.blog-active-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Isotope active 1 ----*/
    $('.grid').imagesLoaded( function() {
        // filter items on button click
        $('.product-menu-active-1').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });	

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'fitRows',
        });
    });
    
    /*------ Isotope active 2 ----*/
    $('.grid-2').imagesLoaded( function() {
        // filter items on button click
        $('.product-menu-active-2').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid2.isotope({ filter: filterValue });
        });	
        // init Isotope
        var $grid2 = $('.grid-2').isotope({
            itemSelector: '.grid-item-2',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item-2',
            }
        });
    });
    $('.isotope-btn-add-active button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    /* Tooltip active */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    /*-----------------------------
      Fixed Footer
    ------------------------------*/
    function fixedFooter () {
        if($window.width() > 991){
            var $footerheight = $(".footer-fixed-area");
            $('.fixed-footer').css({'padding-bottom': $footerheight.height() + 'px'});
        } else {
            $('.fixed-footer').css({'padding-bottom': '0px'});
        }
    }
    fixedFooter();

    $window.on('resize', function(){
        fixedFooter();
    })
    
    /*--
    Smooth Scroll
    -----------------------------------*/
    $('.back-to-top a').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: 0,
            scrollTarget: link.hash
        });
    });
    
    /*--------------------------------
        Testimonial active 1
    -----------------------------------*/
    $('.testimonial-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: false,
    });
    
    /*--------------------------------
        Testimonial active 2
    -----------------------------------*/
    $('.testimonial-active-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Testimonial active 3
    -----------------------------------*/
    $('.testimonial-active-3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Testimonial active 4
    -----------------------------------*/
    $('.testimonial-active-4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="las la-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------
    instafeed
    -----------------------------------*/
    // User Changeable Access
    var activeId = $("#instafeed"),
    limit = activeId.data("limit"),
        myTemplate = '<div class="instagram-item"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>';
    if (activeId.length) {
        var accessTokenID = "IGQVJWLXU1Ri1JbjE0RlhlRmVZAMy1mRllxUzJWZAG5najYxWUxLcGl1SV80UHNiN2ZAaUFdHTVllMEh6YjRucTZAIY09TQlowdGlScG9taHhWNHJwaXQzOVZAwUDdsZAHdqTjhTcHB5ZA2I5QWRVZAVZAtYjZA2SgZDZD",
            userFeed = new Instafeed({
                accessToken: accessTokenID,
                template: myTemplate,
                limit: limit,
            });
        userFeed.run();
    }
    
    /*------ Timer active ----*/
    $('#timer-1-active').syotimer({
        year: 2022,
        month: 12,
        day: 31,
        hour: 23,
        minute: 59,
        layout: 'dhms',
        periodic: false,
        periodUnit: 'm'
    });
    
    /*------ Product slider active 1 ----*/
    $('.product-slider-active-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="product-icon-left"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="product-icon-right"><i class="las la-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*---------------------
        Video popup
    --------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
    
    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    }); 
    
    /*-----------------------
        Shop filter active 
    ------------------------- */
    $('.shop-filter-active').on('click', function(e) {
        e.preventDefault();
        $('.product-filter-wrapper').slideToggle();
    })
    var shopFiltericon = $('.shop-filter-active');
    shopFiltericon.on('click', function() {
        $('.shop-filter-active').toggleClass('active');
    })
    
    
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();
    
    /*-------------------------------------
        Product details big image slider
    ---------------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: false,
        fade: false,
        prevArrow: '<span class="pro-dec-icon pro-dec-prev"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="pro-dec-icon pro-dec-next"><i class="las la-angle-right"></i></span>',
        asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
    });
    
   /*----------------------------------------
        Product details small image slider
    ------------------------------------------*/
    $('.product-dec-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        fade: false,
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
    
    
   /*----------------------------------------
        Product details small image slider 2
    ------------------------------------------*/
    $('.product-dec-slider-small-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        fade: false,
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    
    /*--------------------------------
        Product details carousel active
    -----------------------------------*/
    $('.product-details-carousel-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<span class="slider-icon-1-prev"><i class="las la-angle-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="las la-angle-right"></i></span>',
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /*------- Color active -----*/
    $('.pro-details-color-content').on('click', 'a', function(e){
        e.preventDefault();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    });
    
    /*------------------------
        Sidebar sticky active
    -------------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 0,
        bottomSpacing: 30,
        minWidth: 991, 
    });
    
    /*---------------------
        Select active
    --------------------- */
    $('.select-active').select2();
    $(window).on('resize', function(){
        $('.select-active').select2()
    });
    /*--- Checkout toggle active ----*/
    $('.checkout-coupon-active').on('click', function(e) {
        e.preventDefault();
        $('.checkout-coupon-content').slideToggle(1000);
    });
    
    /*--- Checkout toggle active 2 ----*/
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
    
    /*----------------------------------
        Checkout one click toggle active
    -------------------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
	 $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });
    
    
    /*------------------------------
        Mobile menu dropdown active
    -------------------------------- */
    var $offCanvasNav = $('.mobile-menu , .category-menu-dropdown'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    /*--- Language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function(e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });
    
    /*-------------------------
      Category active
    --------------------------*/
    $('.categori-button-active').on('click', function(e) {
        e.preventDefault();
        $('.categori-dropdown-wrap').slideToggle(900);
    });
    
    
    /*-------------------------
      Scroll Animation
    --------------------------*/
    AOS.init({
        once: true,
        duration: 1000,
    });
    
    
})(jQuery);

