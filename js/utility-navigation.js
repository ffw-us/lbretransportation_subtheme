(function ($) {
  "use strict";

  Drupal.behaviors.utilityNavigation = {
    attach: function (context) {
      // Check for navigation utility menu and clone it to the mobile navigation.
      const $utility = $('.utility-navigation', context);
      if ($utility.length) {
        const $clonedUtility = $utility.clone();
        $clonedUtility.addClass('utility-navigation-mobile');
        $clonedUtility.prependTo('.su-masthead .su-multi-menu > ul', context)
          .wrap('<li class="su-mobile-site-utility"></li>');
      }
    },
  };
})(jQuery);
