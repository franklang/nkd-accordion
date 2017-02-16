;(function ($, window, undefined){
  // DOM reset
  $.fn.nkdReset = function(){
    $(this).find('[data-state="open"]').each(function(){
      $(this).attr('data-state','closed');
    });
  }
}(jQuery, window));
