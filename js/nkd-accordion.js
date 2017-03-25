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

    function onLinkClick(el){
      // Get current nav level of clicked link
      var getLinkNavLevel = $(this)
        .closest('.js-nkd-level')
        .attr('data-level');

      // Get clicked link sublevel state (open/closed)
      var getSubLevelState = $(this)
        .parent('.js-nkd-item')
        .attr('data-state');

      if (getSubLevelState == 'closed'){
        setSubLevelState($(this),'open');

        if (settings.closeAll == true){
          $(this)
            .parent('.js-nkd-item')
            .siblings('[data-state="open"]')
            .attr('data-state', 'closed');

            closeChildren($(this));
        }

      }

      else if (getSubLevelState == 'open'){
        setSubLevelState($(this),'closed');

        if (settings.closeAll == true){
          closeChildren($(this));
        }
      }

      // Avoid in-path links to be triggered
      if ($(this).next('.js-nkd-level').length == 1){
        el.preventDefault();
      }
    }

    $('.js-nkd-link').on('click', onLinkClick);

  }; 

  // Destroy the accordion.
  // This reverts all accordion elements back to their original state (before calling the accordion).
  $.fn.nkdAccordionDestroy = function(){
    $(this).find('[data-state="open"]').each(function(){
      $(this).attr('data-state','closed');
    });
  };  
}(jQuery, window));
