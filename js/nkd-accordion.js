;(function ($, window, undefined){
  $.fn.nkdAccordion = function(options){

    var defaults = {
      closeAll: false
    }

    var settings = $.extend({}, defaults, options);

    // Close children sublevels
    function closeChildren(element){
      element
        .parent('.js-nkd-item')
        .find('[data-state="open"]')
        .each(function(){
          $(this)
            .attr('data-state', 'closed');
        });
    }

    function onLinkClick(){
      // Get current nav level of clicked link
      var getLinkNavLevel = $(this)
        .closest('.js-nkd-level')
        .attr('data-level');

      // Get clicked link sublevel state (open/closed)
      var getSubLevelState = $(this)
        .parent('.js-nkd-item')
        .attr('data-state');

      if (getSubLevelState == 'closed'){
        nkd.setSubLevelState($(this),'open');

        if (settings.closeAll == true){
          $(this)
            .parent('.js-nkd-item')
            .siblings('[data-state="open"]')
            .attr('data-state', 'closed');

            closeChildren($(this));
        }

      }

      else if (getSubLevelState == 'open'){
        nkd.setSubLevelState($(this),'closed');

        if (settings.closeAll == true){
          closeChildren($(this));
        }
      }
    }

    $('.js-nkd-link').on('click', onLinkClick);

  };
}(jQuery, window));
