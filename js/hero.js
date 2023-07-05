(function ($) {
  "use strict";

  Drupal.behaviors.field_descriptions = {
    attach: function (context, settings) {
      $(".su-hero__card", context).each(function () {
        $(this).css("margin-top", -($(this).height() / 2));
      });
    },
  };
})(jQuery);
