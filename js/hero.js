(function ($) {
  "use strict";

  Drupal.behaviors.heroCards = {
    attach: function (context) {
      once("heroCards", "html").forEach(function () {
        const centerCard = function () {
          $(".layout--banner .su-hero__card", context).each(function () {
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
      });
    },
  };
})(jQuery);
