(function() {

  (function($) {
    return $.widget("ui.omnipost", {
      _create: function() {
        var _this = this;
        this.element.autoResize();
        this.element.addClass('ui-omniPost');
        this.element.after($('<button>Submit</button>'));
        return this.element.focusin(function() {
          if (_this.element.attr('readonly') == null) _this.element.next().show();
          _this.element.removeClass('ui-omniPostActive');
          if (_this.element.val() === _this.element.attr('title')) {
            return _this.element.text('');
          }
        }).focusout(function() {
          if (_this.element.val() === '') {
            _this.element.next().hide();
            _this.element.text(_this.element.attr('title'));
            return _this.element.addClass('ui-omniPostActive');
          }
        }).focusout();
      },
      destroy: function() {
        return this.element.next().remove();
      },
      _setOption: function(option, value) {
        return $.Widget.prototype._setOption.apply(this, arguments);
      }
    });
  })(jQuery);

}).call(this);
