window.addEventListener('scroll', function () {
    document.body.classList[window.scrollY > 160 ? 'add': 'remove']('scrolled');
});

let stickyOffset = $('.mouseover_for_career_hist').offset().top - 30;

$(window).scroll(function(){
    let sticky = $('.mouseover_for_career_hist'),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});