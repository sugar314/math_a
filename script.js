$(function() {
  
    function toggleChangeBtn() {
      var slideIndex = $('.slide').index($('.active'));
      $('.change-btn').show();
      if (slideIndex == 0) {
        $('.prev-btn').hide();
      } else if (slideIndex == $('.slide').length -1) {
        $('.next-btn').hide();
      }
    }
    
    $('.index-btn').click(function() {
        $('.show').removeClass('show');
        $('.hide').removeClass('hide')
        $('.active').removeClass('active');
        $('.ans-active').removeClass('ans-active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide').eq(clickedIndex).addClass('active');
        $('.slide-ans').eq(clickedIndex).addClass('ans-active');
        toggleChangeBtn();
    });
    
    $('.change-btn').click(function() {
        
      var $displaySlide = $('.active');
      var $displaySlideAns = $('.ans-active');
      $('.show').removeClass('show');
      $('.hide').removeClass('hide')
      if ($(this).hasClass('next-btn')) {
        $displaySlide.removeClass('active');
        $displaySlideAns.removeClass('ans-active');  
        $displaySlide.next().addClass('active');
        $displaySlideAns.next().addClass('ans-active');
      } else if ($(this).hasClass('prev-btn')) {
        $displaySlide.removeClass('active');
        $displaySlideAns.removeClass('ans-active');  
        $displaySlide.prev().addClass('active');
        $displaySlideAns.prev().addClass('ans-active');
      }
      toggleChangeBtn();
    });

    $('.ans-btn').click(function(){
        var $displaySlide = $('.active');
        var $displaySlideAns = $('.ans-active');
        $displaySlide.addClass('hide');
        $displaySlideAns.addClass('show');
    })

  });
  