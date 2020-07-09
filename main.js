window.addEventListener("scroll", function(){
    let topNav = document.getElementById("topNav");

    if(window.pageYOffset >  750) {
        topNav.classList.add("scroll-menu");
    } else {
        topNav.classList.remove("scroll-menu")
    }

});

$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

//scroll function
$('.navbar a').on('click', function(e){
    if(this.hash !== '') {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});