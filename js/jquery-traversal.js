( function() {
    "use strict;"

    $(document).ready(function() {

        $(".my-paragraphs").each( function(index) {
            if(index % 2 === 0) {
                $(this).css('background-color', 'yellow');
            }
        });

        $(".my-paragraphs").each( function(index, element) {
            $(element).css('font-size', '40px');
        });

        $('li').first().css('color', 'blue');
        $('li').last().css('color', 'blue');


        $('ul').children().each(function(index, element) {
            console.log($(element).html());
        });

        $('#stack-stuff').next().children().each(function(index, element) {
            $(element).css('background-color', 'pink');
        });
    });

})();