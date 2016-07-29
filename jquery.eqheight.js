/**
 * jQuery plugin eqHeight
 *
 * =======  THE PLUGIN =======
 *
 * eqHeight does what it says. It sets blocks beside each other to the same height, based on the selector you pass. It
 * also works responsively which is a must these days. Only applies equal height if columns are stacked horizontally within
 * the bounding box.
 *
 * This is useful if:
 * - You have columns side by side and those have background and don't have the same content.
 *
 *
 *
 * =======  USAGE =======
 *
 *
 * HTML:
 *
 * <code>
 *     <div class="container">
 *     <div class="row">
 *     <div class="col-xs-4" style="background: yellow;">
 *         Some text.
 *     </div>
 *     <div class="col-xs-4" style="background: red;">
 *         Some long text ..
 *     </div>
 *     <div class="col-xs-4" style="background: pink;">
 *         Some very long text ...
 *     </div>
 *     </div>
 *     </div>
 * </code>
 *
 *
 * <code>
 * $(function () {
 *     $('.col').eqHeight({  });
 * });
 * </code>
 *
 * You can also initialize by data attribute data-eqheight:
 *
 * <code>
 *     <div class="row" data-eqheight=".col-xs-4">
 *         .... .col-xs-4 inside here will have equal height ....
 *     </div>
 * </code>
 *
 *
 *
 * @author Petter Kjelkenes <kjelkenes@gmail.com>
 * @package jQuery.eqHeight
 * @version 0.0.5
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  $.fn.extend({
    eqHeight: function (options) {
      var els = this;
      var options = $.extend({

        /**
         * Binds to resize event if true.
         * This should probably be done, if you have a responsive site. if not disable it (better performance).
         */
        bindResizeEvent: true,

        /**
         * Advanced callback, set height and check height on parent or child of the selector passed to the plugin.
         * @param $self
         * @returns {*}
         */
        heightAdjuster: function ($self) {
          return $self;
        }

      }, options || {});



      if (!els.length) return;


      if (els.data('eqheight')) {
        els = els.find(els.data('eqheight'));
      }

      function resize (els) {
        var rows = {};

        els.each(function () {
          var $el = $(this);
          var rowIndicator = $el.offset().top;
          if (typeof rows[rowIndicator] === 'undefined') {
            rows[rowIndicator] = [];
          }
          rows[rowIndicator].push(options.heightAdjuster($el));

        });

        $.each(rows, function (rowIndicator, columns) {
          $.each(columns, function (index, $column) {
            $column.height('auto');
          });
          // Only resize if more then one of it...
          if (columns.length > 1) {
            var tallest = 0;
            $.each(columns, function (index, $column) {
              var height = $column.height();
              if (height > tallest) {
                tallest = height;
              }
            });
            $.each(columns, function (index, $column) {
              $column.height(tallest);
            });
          }
        });
      }

      if (options.bindResizeEvent) {
        $(window).resize(function () {
          resize(els);
        });
      }

      resize(els);
      return els;
    }
  });

  $(function () {
    $('[data-eqheight]').eqHeight({});
  });
}));
