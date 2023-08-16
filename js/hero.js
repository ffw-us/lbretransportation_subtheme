(function ($) {
  "use strict";

  Drupal.behaviors.heroCards = {
    attach: function (context) {
      // Center the text box vertically
      const centerCard = function () {
        const MEDIA_LG = 992;
        const $heroCards = $(".layout--banner .su-hero__card", context);

        $heroCards.each(function () {
          const $this = $(this);
          const marginOld = parseInt($this.css("margin-top").replace("px", ""));
          const marginNew =
            window.innerWidth >= MEDIA_LG ? -Math.round($this.height() / 2) : 0;

          if (marginOld !== marginNew) {
            $this.css("margin-top", `${marginNew}px`);
          }
        });
      };

      // Debounce the resize event to avoid excessive recalculations
      const debounce = (callback, delay) => {
        let timeoutId;
        return () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(callback, delay);
        };
      };

      $(window, context).on("resize", debounce(centerCard, 250));
      $(window, context).on("load", centerCard);
    },
  };
})(jQuery);
