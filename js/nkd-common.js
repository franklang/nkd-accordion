;(function ($, window, undefined){
  // DOM reset method
  $.fn.nkdReset = function(){
    $(this).find('[data-state="open"]').each(function(){
      $(this).attr('data-state','closed');
    });
  };
}(jQuery, window));

var nkd = {
    // Set clicked link sublevel state (open/closed)
    setSubLevelState: function(element,state){
      element
        .parent('.js-nkd-item')
        .attr('data-state', state);
    }
}