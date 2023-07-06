(function ($) {
  "use strict";

  Drupal.behaviors.hero_cards = {
    attach: function (context, settings) {
      const centerCard = function () {
        $(".su-hero__card", context).each(function () {
          const marginOld = parseInt(
            $(this).css("marginTop").replace("px", "")
          );
          const marginNew = -Math.round($(this).height() / 2);

          if (marginOld !== marginNew) {
            $(this).css("margin-top", marginNew);
          }
        });
      };

      $(window).on("resize", function () {
        centerCard();
      });

      centerCard();
    },
  };
})(jQuery);
