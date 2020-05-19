'use strict';

(function () {
  var Accordion, AnchorMake, clickEvent, DaySelect, LinkIcon, MenuBtn, MenuHide, Run, ScrollifySet, SearchBox, SelectBox, Slider, Update, WysiwygSet, resizeEvent, ua, uaNum;

  ua = navigator.userAgent;

  if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    uaNum = 0;
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    uaNum = 1;
  } else {
    uaNum = 2;
  }

  if (uaNum === 0 || uaNum === 1) {
    resizeEvent = 'orientationchange';
  } else {
    resizeEvent = 'resize';
  }

  MenuBtn = function MenuBtn() {
    if ($('.js-navToggle2').length > 0) {
      if (uaNum === 0 || uaNum === 1) {
        clickEvent = 'touchend';
      } else {
        clickEvent = 'click';
      }
      $('#global-navBtn2.js-navToggle2').on(clickEvent, function () {
        if (!$(this).hasClass('open')) {
          $(this).addClass('open');
          $('#global-nav2.js-navToggle2').addClass('open');
          $('body').css('overflow', 'hidden');
        } else {
          $(this).removeClass('open');
          $('#global-nav2.js-navToggle2').removeClass('open');
          $('body').css('overflow', 'visible');
        }
      });
    }
  };

  MenuHide = function MenuHide() {
    if ($('.js-navViewSec').length > 0) {
      $('.menuFst').hover(function () {
        $(this).children('.menuFstInner').next('.menuSec').css({
          'visibility': 'visible'
        });
      }, function () {
        $(this).children('.menuFstInner').next('.menuSec').delay(300).queue(function () {
          $(this).css({
            'visibility': 'hidden'
          }).dequeue();
        });
      });
    }
  };

  SearchBox = function SearchBox() {
    if ($('#searchBox').length > 0) {
      $(window).on('load', function () {
        $('#gsc-i-id1').attr('placeholder', 'Custom Search');
      });
    }
  };

  Accordion = function Accordion() {
    if ($('.js-ac1').length > 0) {
      $('.js-ac1.module-mediaType04-list .mediaImage').on('click', function () {
        $(this).next('.mediaText').slideToggle();
        $(this).parent('.mediaItem').toggleClass('is-active');
      });
    }
    if ($('.js-ac2').length > 0) {
      $('.js-ac2.module-keywords .keywordContents').hide();
      $('.js-ac2.module-keywords .keywordTitle').on('click', function () {
        var _margin, _slide, _winW;
        _winW = $(window).width();
        _slide = $(this).next('.keywordContents');
        _margin = _slide.height();
        if (751 < _winW) {
          $('.keywordContents').delay(200).fadeOut(200);
          $('.keywordItem').removeClass('is-active');
          $('.keywordWrap').animate({
            'marginBottom': 0
          }, 200);
          if (_slide.css('display') === 'none') {
            _slide.slideDown(200);
            $(this).parent('.keywordItem').addClass('is-active');
            $(this).parent().parent().animate({
              'marginBottom': _margin
            }, 200);
          }
        } else {
          _slide.slideToggle(200);
          $(this).parent('.keywordItem').toggleClass('is-active');
        }
      });
      $('.js-ac2.module-keywords .keywordBar2 .btn').on('click', function () {
        $(this).parent('.keywordBar2').parent('.keywordContents').prev('.keywordTitle').trigger('click');
      });
      $(window).on(resizeEvent, function () {
        $('.keywordContents').fadeOut(200);
        $('.keywordItem').removeClass('is-active');
        $('.keywordWrap').animate({
          'marginBottom': 0
        }, 200);
      });
    }
    if ($('.js-ac3.module-mediaType06').length > 0) {
      $('.js-ac3.module-mediaType06 .mediaTitle').on('click', function () {
        $(this).next('.mediaWrap').slideToggle();
        $(this).parent('.mediaItem').toggleClass('is-active');
      });
    }
    if ($('.js-ac3.module-mediaType07').length > 0) {
      $('.js-ac3.module-mediaType07 .mediaTitle').on('click', function () {
        $(this).next('.mediaWrap').slideToggle();
        $(this).parent('.mediaItem').toggleClass('is-active');
      });
    }
  };

  Slider = function Slider() {
    var swiper;
    if ($('.js-carouselSlider').length > 0) {
      swiper = new Swiper('.js-carouselSlider', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          750: {
            slidesPerView: 1
          }
        }
      });
    }
  };

  AnchorMake = function AnchorMake() {
    var _count, _html, _html1, _html2;
    if ($('.js-anchorMake').length > 0) {
      _count = 1;
      _html = '';
      _html1 = '';
      _html2 = '';
      $('.module-commonLayout h2, .module-commonLayout h3').each(function () {
        var _id, _text;
        if ($(this).attr('id')) {
          _id = $(this).attr('id');
          _text = $(this).text();
          _html += '<li class="listItem"><div class="listInner"><a href="#' + _id + '" class="js-smoothScroll"><span class="listIcon module-iconArrowBL01">竊�</span><span class="listText">' + _text + '</span></a></div></li>';
        }
      });
      $('.module-commonLayout h2').each(function () {
        var _id, _text;
        if ($(this).attr('id')) {
          _id = $(this).attr('id');
          _text = $(this).text();
          _html1 += '<li class="listItem"><div class="listInner"><a href="#' + _id + '" class="js-smoothScroll"><span class="listIcon module-iconArrowBL01">竊�</span><span class="listText">' + _text + '</span></a></div></li>';
        }
      });
      $('.module-commonLayout h3').each(function () {
        var _id, _text;
        if ($(this).attr('id')) {
          _id = $(this).attr('id');
          _text = $(this).text();
          _html2 += '<li class="listItem"><div class="listInner"><a href="#' + _id + '" class="js-smoothScroll"><span class="listIcon module-iconArrowBL01">竊�</span><span class="listText">' + _text + '</span></a></div></li>';
        }
      });
      $('.js-anchorMake[data-anchor-target="h2,h3"]').each(function () {
        $(this).children('ul.listItems').append(_html);
      });
      $('.js-anchorMake[data-anchor-target="h2"]').each(function () {
        $(this).children('ul.listItems').append(_html1);
      });
      $('.js-anchorMake[data-anchor-target="h3"]').each(function () {
        $(this).children('ul.listItems').append(_html2);
      });
    }
  };

  WysiwygSet = function WysiwygSet() {
    if ($('.wysiwyg a').length > 0) {
      $('.wysiwyg a[href^="http://"]').attr('target', '_blank');
      $('.wysiwyg a[target="_blank"]').append('<span class="module-iconBlankM01" />');
    }
    if ($('.wysiwyg ul li').length > 0) {
      $('.wysiwyg ul li').wrapInner('<div class="listText" />');
    }
    if ($('.wysiwyg table').length > 0) {
      $('.wysiwyg table').wrap('<div class="tableWrap" />');
    }
  };

  LinkIcon = function LinkIcon() {
    if ($('.module-linkBox a').length > 0) {
      $('.module-linkBox a[href^="http://"]').attr('target', '_blank');
      $('.module-linkBox a[target="_blank"]').find('.title').append('<span class="module-iconBlankM01" />');
    }
    if ($('.module-linkBox2 a').length > 0) {
      $('.module-linkBox2 a[href^="http://"]').attr('target', '_blank');
      $('.module-linkBox2 a[target="_blank"]').find('.text').append('<span class="module-iconBlankM01" />');
    }
    if ($('.listItem a').length > 0) {
      $('.listItem a[href^="http://"]').attr('target', '_blank');
      $('.listItem a[target="_blank"]').append('<span class="module-iconBlankM01" />');
    }
    if ($('.keywordLists a').length > 0) {
      $('.keywordLists a[href^="http://"]').attr('target', '_blank');
      $('.keywordLists a[target="_blank"]').find('.listInner').append('<span class="module-iconBlankM01" />');
    }
    if ($('.introLink a').length > 0) {
      $('.introLink a[href^="http://"]').attr('target', '_blank');
      $('.introLink a[target="_blank"]').find('.title').append('<span class="module-iconBlankM01" />');
    }
  };

  SelectBox = function SelectBox() {
    if ($('.js-selectBox').length > 0) {
      $('.js-selectBox select').each(function () {
        var _val;
        _val = $(this).children('option:selected').text();
        $(this).prev('.label').text(_val);
        $(this).change(function () {
          _val = $(this).children('option:selected').text();
          return $(this).prev('.label').text(_val);
        });
      });
    }
  };

  DaySelect = function DaySelect() {
    var _d, _day, _month, _year, calcDays;
    if ($('.js-daySelect').length > 0) {
      _d = 0;
      _day = $('.js-daySelect .selectDay select');
      _year = $('.js-daySelect .selectYear select');
      _month = $('.js-daySelect .selectMonth select');
      calcDays = function calcDays() {
        var _i, _last, _m, _selected, _y;
        _day.empty();
        _y = Number(_year.val());
        _m = Number(_month.val());
        if (_m === '' || _y === '') {
          _last = 31;
        } else if (_m === 2 && (_y % 400 === 0 || _y % 4 === 0 && _y % 100 !== 0)) {
          _last = 29;
        } else {
          if (_m > 0) {
            _last = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)[_m - 1];
          } else {
            _last = 31;
          }
        }
        _day.append('<option value="">-</option>');
        _i = 1;
        while (_i <= _last) {
          if (_d === _i) {
            _day.append('<option value="' + _i + '" selected>' + _i + '</option>');
          } else {
            _day.append('<option value="' + _i + '">' + _i + '</option>');
          }
          _i++;
        }
        _selected = _day.children('option:selected').text();
        _day.prev('.label').text(_selected);
      };
      $(function () {
        var _i, _thisYear;
        _thisYear = new Date();
        _i = _thisYear.getFullYear() - 1;
        while (_i >= 1950) {
          _year.append('<option value="' + _i + '">' + _i + '</option>');
          _i--;
        }
        _i = 1;
        while (_i <= 12) {
          _month.append('<option value="' + _i + '">' + _i + '</option>');
          _i++;
        }
        _i = 1;
        while (_i <= 31) {
          _day.append('<option value="' + _i + '">' + _i + '</option>');
          _i++;
        }
        _day.change(function () {
          _d = Number($(this).val());
        });
        _year.change(calcDays);
        _month.change(calcDays);
      });
    }
  };

  ScrollifySet = function ScrollifySet() {
    var _pager, _section, createPager, option, pagerCurrent, pagerLink;
    if ($('.js-scrollify').length > 0) {
      if (uaNum === 2) {
        _section = $('.js-scrollifySection');
        _pager = $('.js-scrollifyPager');
        option = {
          section: '.js-scrollifySection',
          standardScrollElements: '.js-scrollifyStandard',
          easing: 'swing',
          scrollSpeed: 600,
          scrollbars: true,
          setHeights: false,
          updateHash: false,
          before: function before(index, section) {
            pagerCurrent(index);
          },
          afterRender: function afterRender() {
            createPager();
          }
        };
        pagerCurrent = function pagerCurrent(index) {
          var $li;
          if (index == null) {
            index = 0;
          }
          $li = _pager.find('li');
          $li.removeClass('is-current');
          $li.eq(index).addClass('is-current');
        };
        createPager = function createPager() {
          _section.each(function (i, e) {
            var addClass, html, sectionName;
            sectionName = $(e).attr('data-section-name');
            addClass = '';
            if (i === 0) {
              addClass = 'is-current';
            }
            html = '';
            html += '<li class="' + addClass + '">';
            html += '<a href="#' + sectionName + '"></a>';
            html += '</li>';
            _pager.append(html);
          });
          pagerLink();
        };
        pagerLink = function pagerLink() {
          _pager.find('a').on('click', function () {
            $.scrollify.move($(this).attr('href'));
            return false;
          });
        };
        $.scrollify(option);
      }
      $(window).on('load resize', function () {
        var _h, _x, _y;
        if (uaNum === 2) {
          _x = $(window).width();
          _y = 750;
          if (_x < _y) {
            $('.js-scrollifySection').addClass('js-scrollifyStandard');
            $.scrollify.disable();
            $.scrollify.update();
          } else {
            $('.js-scrollifySection').removeClass('js-scrollifyStandard');
            $.scrollify.enable();
            $.scrollify.update();
          }
        }
        _h = $(window).height();
        $('.feature-visual').css('min-height', _h + 'px');
      });
      $('.js-scrollifyArrow a[href^="#"]').click(function () {
        var href, position, speed, target;
        speed = 500;
        href = $(this).attr('href');
        target = $(href === '#' || href === '' ? 'html' : href);
        position = target.offset().top;
        $('html, body').animate({
          scrollTop: position
        }, speed, 'swing');
        return false;
      });
    }
  };

  Update = function Update() {};

  Run = function Run() {
    MenuBtn();
    MenuHide();
    SearchBox();
    Accordion();
    Slider();
    AnchorMake();
    WysiwygSet();
    LinkIcon();
    SelectBox();
    DaySelect();
    ScrollifySet();

    /**** mogi add ****/
    $('.menuFstLink.js-navViewSec').click(function() {
      $('#global-navBtn2.js-navToggle2').removeClass('open');
      $('#global-nav2.js-navToggle2').removeClass('open');
      $('body').css('overflow', 'visible');
  });

  };

  $(window).on('load', function () {
    Update();
  });

  $(window).on(resizeEvent, function () {
    Update();
  });

  Run();
}).call(undefined);