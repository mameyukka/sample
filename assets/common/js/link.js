(function ($) {
  "use strict";

  $(function() {
    /**
     * navの置換
     */
    var
      $target = $('a[href="index.html"]'),
      $target2 = $('a[href$="/index.html"], a[href*="/index.html#"]').not('a[href^=http], a[href^=https]');

    $target.attr('href', './');
    $target2.each(function () {
      $(this).attr("href", $(this).attr('href').replace(/index.html/g, ''));
    });
  });
})(jQuery);