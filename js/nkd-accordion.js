;(function ($, window, undefined){
  $.fn.nkdAccordion = function(options){

    var defaults = {
      closeAll: false
    }

    var settings = $.extend({}, defaults, options);

    // Set clicked link sublevel state (open/closed)
    function setSubLevelState(element,state){
      element
        .parent('.js-nkd-item')
        .attr('data-state', state);
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

      // Close children sublevels
      var closeChildren = $(this)
        .parent('.js-nkd-item')
        .find('[data-state="open"]')
        .each(function(){
          $(this)
            .attr('data-state', 'closed');
        });

      if (getSubLevelState == 'closed'){
        if ((getLinkNavLevel == 0) && (settings.closeAll == true)){
          $(this)
            .parent('.js-nkd-item')
            .siblings('[data-state="open"]')
            .attr('data-state', 'closed');

            closeChildren
        }
        setSubLevelState($(this),'open');
      }

      else if (getSubLevelState == 'open'){
        setSubLevelState($(this),'closed');

        closeChildren
      }
    }

    $('.js-nkd-link').on('click', onLinkClick);

  };
}(jQuery, window));
