$(document).ready(function(){
    $('a.fs-link').on('click', function(){
        // Get current nav level of clicked link
        var getLinkNavLevel = $(this)
                                .closest('ul.fs-level')
                                .attr('data-level');
        
        // Get clicked link sublevel state (open/closed)
        var getSubLevelState = $(this)
                                .parent('li.fs-item')
                                .attr('data-state');
        
        // Close children sublevels
        var closeChildren = $(this)
                                .parent('li.fs-item')
                                .find('li.fs-item[data-state="open"]')
                                .each(function(){
                                    $(this)
                                        .attr('data-state', 'closed');
                                });

        // Set clicked link sublevel state (open/closed)
        function setSubLevelState(element,state){
            element
                .parent('li.fs-item')
                .attr('data-state', state);         
        }

        if (getSubLevelState == 'closed'){
            if (getLinkNavLevel == 0){
                $(this)
                    .parent('li.fs-item')
                    .siblings('li.fs-item[data-state="open"]')
                    .attr('data-state', 'closed');
                
                closeChildren           
            }
            setSubLevelState($(this),'open');
        }

        else if (getSubLevelState == 'open'){
            setSubLevelState($(this),'closed');
            
            closeChildren
        }       
    });
});
