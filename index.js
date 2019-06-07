// window.onload = function(){
//
//   document.querySelector(".fade-in").classList.add("load");
//
//
// };

$(document).ready(function(){
    $('.fade-in').addClass('load');

    $('a[href^="#"].scroll').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.grid').imagesLoaded( function() {
      // images have loaded
      // init Masonry
      var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });



    });
});
