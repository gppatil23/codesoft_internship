let typed = new Typed('#type',
    {
        strings: ['Coder', 'Developer', 'Gamer'],
        typeSpeed: 100,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50

    })

gsap.to('#tpart #todo',{
    opacity:1,
    scale:1,
    scrollTrigger:{
        trigger:'#tpart #todo',
        scroller:'body',
        scrub:2,
        start:'top 80%',
        end:'top 30%'
    }
})

gsap.to('#tpart #bmi',{
    opacity:1,
    scale:1,
    scrollTrigger:{
        trigger:'#tpart #bmi',
        scroller:'body',
        scrub:2,
        start:'top 80%',
        end:'top 30%'
    }
})

gsap.to('#tpart #netflix',{
    opacity:1,
    scale:1,
    scrollTrigger:{
        trigger:'#tpart #netflix',
        scroller:'body',
        scrub:2,
        start:'top 80%',
        end:'top 30%'
    }
})

gsap.to('#tpart #finance',{
    opacity:1,
    scale:1,
    scrollTrigger:{
        trigger:'#tpart #finance',
        scroller:'body',
        scrub:2,
        start:'top 80%',
        end:'top 30%'
    }
})

gsap.to('#tpart #weather',{
    opacity:1,
    scale:1,
    scrollTrigger:{
        trigger:'#tpart #weather',
        scroller:'body',
        scrub:2,
        start:'top 80%',
        end:'top 30%'
    }
})
function hides() {
    $('.menu_list_2').hide();
}
$(function () {
    $('.menu_list_2').hide();
    $('#menubar').click(function () {
        $('.menu_list_2').slideToggle(300);
        $('.toppart').css('background-color', 'rgb(177, 177, 177)');
    });

    $('#home1').click(function () {
        $('html, body').animate({
            scrollTop: $('#toppart').offset().top
        }, 500);
    });

    $('#about1').click(function () {
        $('html, body').animate({
            scrollTop: $('#spart').offset().top
        }, 500);
    });

    $('#pronskil1').click(function () {
        $('html, body').animate({
            scrollTop: $('#tpart').offset().top
        }, 500);
    });

    $('#connect1').click(function () {
        $('html, body').animate({
            scrollTop: $('#fopart').offset().top
        }, 300);
    });

    $(window).scroll(function () {

        if ($(document).scrollTop() < 200) {
            $('#home1').addClass("afterclick");
        } else if ($(document).scrollTop() > 300 && $(document).scrollTop() < 800) {
            $('#about1').addClass("afterclick");
        } else if ($(document).scrollTop() > 900 && $(document).scrollTop() < 4000) {
            $('#pronskil1').addClass("afterclick");
        } else if ($(document).scrollTop() > 4500) {
            $('#connect1').addClass("afterclick");

        }
        else {
            $('#home1').removeClass("afterclick");
            $('#about1').removeClass("afterclick");
            $('#pronskil1').removeClass("afterclick");
            $('#connect1').removeClass("afterclick");
        }
    })

});



