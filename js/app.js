const hamburger = document.querySelector('.hamburger')
const linesHamburger = document.querySelectorAll('.line')
const headerMenu = document.querySelector('.menu_top')
new WOW().init();

hamburger.addEventListener('click', (e) => {
    e.stopPropagation()
    for (const line of linesHamburger){
        line.classList.toggle('is-active')
    }
    hamburger.classList.toggle('is-active')
    headerMenu.classList.toggle('is-active')
})

document.onclick = function() {
    for (const line of linesHamburger){
        line.classList.remove('is-active')
    }
    hamburger.classList.remove("is-active");
    headerMenu.classList.remove("is-active");
}



$('a.anchor').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 57}, {
        duration: 1200,
        specialEasing: {
            width: "linear",
            heigth: "easeInOutCcubic"
        }
    });
    event.preventDefault();
});




