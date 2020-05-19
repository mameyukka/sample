;(function(window, $, undefined) {
var
Ua = $.fn.GetModule('ua'),
MatchMedia = $.fn.GetModule('matchMedia'),
YoutubePlayer = $.fn.GetModule('youtubePlayer'),
IsChina = $.fn.GetModule('isCountry')()._china;

/**
 * ------------------------------
 * initialize
 * ------------------------------
 */
$mainMovie();
return;

/**
 * ------------------------------
 * main movie
 * ------------------------------
 */
/**
 * @param
 * @return
 */
function $mainMovie() {
  var
  IsSuppor = !(Ua._browser == 'msie' && Ua._version < 9);

  /**
   * constructor
   * @param
   * @return
   */
  function $constructor(options) {
    if (!(this instanceof $constructor)) {
      return new $constructor(options);
    }
    this.options = options;
    $initialize.call(this);
  }

  $constructor.prototype = {
    $pc: $pc,
    $sp: $sp,
    _type: null,
    _result: false
  };

  return $constructor({
    _player: '#js-yPlayer'
  });

  /**
   * initialize
   * @param
   * @return
   */
  function $initialize() {
    if (!IsSuppor) { return; }

    MatchMedia.add('onViewPc', $.proxy(this.$pc, this));
    MatchMedia.add('onViewSp', $.proxy(this.$sp, this));

    // class
    // youtube player
    this.Player = YoutubePlayer({
      _selector: this.options._player,
      _width: 1280,
      _height: 720,
      _dataName: 'data-youtubeId',
      _playerVars: {
        rel: 0,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        autoplay: 1,
        wmode: 'transparent'
      },
      _events: {
        'onStateChange': $.proxy(__$loop, this),
        //'onStateChange': onPlayerStateChange,
        'onReady': onPlayerReady
      }
    });

    this._result = true;
  }

  function onPlayerReady(event) {

    event.target.mute();
    event.target.setVolume(0);
    event.target.playVideo();
        
  }

/*
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      $('#movieStart').fadeOut();
    }
  }
*/

  function $pc() {
    if (Ua._sp || IsChina) {
      this.$sp();
      return;
    }

    if (!this._result || this._type == 'pc') { return; }
    this._type = 'pc';

    this.Player && this.Player.$set();
  }

  function $sp() {
    if (!this._result || this._type == 'sp') { return; }
    this._type = 'sp';

    this.Player && this.Player.$destroy();
  }

  function __$loop(state) {
    if (state.data == YT.PlayerState.PLAYING) {
      $('#movieStart').fadeOut();
    }
    if (state.data === YT.PlayerState.ENDED) {
      this.Player.$seek(0);
      try {
        Utility.$delay(function() {
          this.Player.$play();
        }, 1000, this);
      } catch(e) {}
    }
  }
}

})(window, jQuery);
