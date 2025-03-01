'use strict';

(function () {
  var bnrNum = $('#pcBnr .swiper-slide').length;
  var pcBnr = new Swiper('#pcBnr', {
    slidesPerView: 1,
    init: false,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  });
  if (bnrNum > 1) {
    pcBnr.init();
  }

  var scrollContent = {
    param: {
      elem: '.js-scroll',
      displayRatio: 0.65,
      displayReverse: true,
      addClassNameActive: 'is-scrolled',
      on: {
        In: function In(item, pos) {},
        Out: function In(item, pos) {}
      }
    },
    position: function position() {},
    set: function set() {
      this.module = new SCROLL_EFFECT_MODULE(this.param);
    },
    scroll: function scroll() {},
    resize: function resize() {},
    init: function init() {
      this.set();
    }
  };

  $(window).on('load', function () {
    if ($('.js-scroll').length) {
      scrollContent.init();
    }

    if (paramOp == '') {
      setTimeout(function () {
        $('.l-top__op, .l-top__head').addClass('is-end');
      }, 1500);

      if (wW > 900) {
        var mvH = $('.p-mv').innerHeight();
        $('html,body').animate({
          scrollTop: mvH - wH
        }, {
          duration: 1000,
          easing: 'easeInOutQuart'
        });
        setTimeout(function () {
          $('html,body').animate({
            scrollTop: 0
          }, {
            duration: 2000,
            easing: 'easeInOutQuart'
          });
        }, 2500);
        setTimeout(function () {
          $('.p-mv, .p-maininfo').addClass('is-active');
        }, 4500);
      }
    } else {
      $('.l-top__op').remove();
      setTimeout(function () {
        $('.p-mv, .p-maininfo').addClass('is-active');
      }, 1000);
    }

  });
})();