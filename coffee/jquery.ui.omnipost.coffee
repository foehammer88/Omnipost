(($) ->
  $.widget "ui.omnipost",
  
    _create: ->
      @element.autoResize()
      @element.addClass('ui-omniPost')
      @element.after($('<button>Submit</button>'))
      @element.focusin( =>
        unless @element.attr('readonly')?
          @element.next().show()
        @element.removeClass('ui-omniPostActive')
        if @element.val() is @element.attr('title')
          @element.text('')
      ).focusout( =>
        if @element.val() is ''
          @element.next().hide()
          @element.text(@element.attr('title'))
          @element.addClass('ui-omniPostActive')
      ).focusout()

    destroy: ->
      @element.next().remove()

    _setOption: (option, value) ->
      $.Widget::_setOption.apply this, arguments

) jQuery