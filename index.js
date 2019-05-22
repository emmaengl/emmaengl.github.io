// window.onload = function(){
//
//   document.querySelector(".fade-in").classList.add("load");
//
//
// };

$(document).ready(function(){
    $('.fade-in').addClass('load');
    $('a[href^="#"].nav-link').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});


$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
