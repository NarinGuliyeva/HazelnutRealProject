$( document ).ready(function() {
    if($(window).width() < 767){
        $('.title-about a').appendTo('.addanim3');
    }
    var h = $('#carousel-wrap').height() - 150;
    if($(window).scrollTop()>h){
        $('.addanim1').addClass('animate__animated animate__fadeInRight');
        $('.addanim2').addClass('animate__animated animate__fadeInDown');
        $('.addanim3').addClass('animate__animated animate__fadeInLeft');
    
        $('#navbar').addClass('navbar-down');
    }
    else{
        $('.addanim1').removeClass('animate__animated animate__fadeInRight');
        $('.addanim2').removeClass('animate__animated animate__fadeInDown');
        $('.addanim3').removeClass('animate__animated animate__fadeInLeft');
        $('#navbar').removeClass('navbar-down');
    
    }
    $(window).scroll(function() {
        if($(window).scrollTop()>150){
            $('#navbar').addClass('navbar-down');
            $('#navbar').addClass('anime');
        }
        else{

            $('#navbar').removeClass('navbar-down');
            $('#navbar').removeClass('anime');
        }
    });
});
  var players = document.querySelectorAll('.youtube-player')

  var loadPlayer = function (event) {
    var target = event.currentTarget
    var iframe = document.createElement('iframe')
    iframe.classList.add('youtube-iframe')

    iframe.height = target.clientHeight
    iframe.width = target.clientWidth
    iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1'
    iframe.setAttribute('frameborder', 0)
    iframe.setAttribute('allowfullscreen', "")

    target.classList.remove('pristine')

    if (target.children.length) {
      target.replaceChild(iframe, target.firstElementChild)
      target.replaceChild(iframe, target.children[1])
    } else {
      target.appendChild(iframe)
    }
  }


  // var config = { once: true }

  Array.from(players).forEach(function (player) {
    player.addEventListener('click', loadPlayer)
  });
$(document).ready(function(){
    $('.highslide').fancybox({
        loop : true,
        mobile: {
            clickSlide: "close"
        }
    });
    $('.highslide').attr('data-fancybox','gallery');
    $('.icon-block-lang').click(function(){
        $('.lang-dropdown').slideToggle();
    });
 $(document).click(function (e) {
    if (!$(e.target).is('.icon-block-lang,.icon-block-lang i,.icon-block-lang span')) {
        $('.lang-dropdown').slideUp();
    }
});
});

$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical" 
});
$('.carousel').carousel({
    pause: false
});

$(window).scroll(function() {
    var x = $(window).scrollTop()/$(document).height();			
    x=parseInt(-x * 360);		
    $('.map-image').stop().animate({'background-position-x': 'center', 'background-position-y':  x + 'px' }, 700, 'swing');				
});


