$(document).ready(function () {

    // Sticky Navigation Menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');

                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');

                }
            })
        }
    }

    navbarFixed();


    $.getJSON("https://api.covid19api.com/summary", function (data) {


        let total_active = data.Countries.Country.Nepal.TotalActive;
        let total_confirmed = data.Countries.Country.Nepal.TotalConfirmed;
        let total_recovered = data.Countries.Nepal.Country.TotalRecovered;
        let total_deaths = data.Countries.Nepal.Country.TotalDeaths;
        let last_update = data.Countries.Nepal.Country.Date;

        console.log(data.Countries.Country.Nepal);

	$("#active").append(total_active);
        $("#confirmed").append(total_confirmed);
        $("#recovered").append(total_recovered);
        $("#deaths").append(total_deaths);
        $("#lastupdate").append(last_update);


    });

    // counter animation

    let nCount = function (selector) {
        $(selector).each(function () {
            $(this).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: "swing",
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            });
        });
    }
    let a = 0;
    $(window).scroll(function () {
        let oTop = $(".numbers").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() >= oTop) {
            a++;
            nCount(".ract h1");
        }
    });


    // isotope filter

    let $btns = $('.gallary-area .button-group button');

    $btns.click(function (e) {
        $('.gallary-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.gallary-area .grid').isotope({
            filter: selector
        });
        return false;
    })

    $('.gallary-area .button-group #btn1').trigger("click");


    // magnific popup


    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
        // other options
    });

    // Owl Carousel

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1080: {
                items: 3
            }
        }
    });

});