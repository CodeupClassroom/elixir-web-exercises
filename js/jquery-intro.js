( function() {

    "use strict;"

    var myVar = "bob";

    // useful if you need to do js stuff after full page loads
    // window.onload = function() {
    //     // alert( 'The page has finished loading!' );
    // }

    // vanilla js equivalent to add event listener for DOM ready/load
    // document.addEventListener("DOMContentLoaded", function() {
    //     alert('DOM IS READY');
    // });

    doSomething(1);

    // docrob js rule #1: define your js functions at the top-level of your js file's code
    function doSomething(aVariable) {
        console.log(aVariable);

        console.log(myVar);
    }



    $(document).ready(function() {
        // alert( 'The DOM has finished loading!' );

        // majority of js work goes here
        doSomething(2);
    });

    // console.log($.fn.jquery);

})();