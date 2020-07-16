window.addEventListener("scroll", function(){
    let topNav = document.getElementById("topNav");

    if(window.pageYOffset >  750) {
        topNav.classList.add("scroll-menu");
    } else {
        topNav.classList.remove("scroll-menu")
    }

});


$(window).scroll(function(){
    let position = $(this).scrollTop();

    $('.section').each(function(){
        let target = $(this).offset().top;
        let id = $(this).attr('id');

        if(position >= target) {
            $('#topNav > ul > li > a').removeClass('active');
                $('#topNav > ul > li > a [href=#' + id + ']').addClass('active') 
        } 
    })



});








// $(document).on('click', 'ul li', function(){
//     $(this).addClass('active').siblings().removeClass('active')
// });

// //scroll function
// $('.navbar a').on('click', function(e){
//     if(this.hash !== '') {
//         e.preventDefault();

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// });


