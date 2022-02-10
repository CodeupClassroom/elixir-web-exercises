// Using vanilla JS
// document.getElementById('vanilla').addEventListener('click', function () {
//     console.log("A button was clicked");
// });

// document.getElementById('vanilla').addEventListener('keydown', function () {
//     console.log("A button was clicked");
// });


$(document).ready(function () {

    alert('Hello from jquery');


    // MOUSE EVENTS
    $('li').click(function () {
        $(this).css('background-color', 'yellow')
    })

    let paragraphHandler = function () {
        console.log($(this).css('background-color'));
        if ($(this).css('background-color') !== 'rgba(0, 0, 0, 0)'){
            $(this).css('background-color', 'yellow')
        } else {
            $(this).css('background-color', 'red')
        }
    }

    $('p').click(paragraphHandler)

    let headerHandler = function () {
        $(this).css('color', 'teal')
    }
    $('h1').dblclick(headerHandler)

    $('.sec-intro').hover(
        function () {
            $(this).css('font-style', 'italic')
        },
        function () {
            $(this).css('font-style', 'normal')
        })

    // KEYBOARD EVENTS

    // $('#search').keydown(function (event) {
    //     console.log(event.keyCode);
    //     console.log('a key was pressed down');
    // })

    // $('#search').keypress(function (event) {
    //     console.log(event.keyCode);
    //     console.log('a key was pressed down');
    // })

    // $('#search').keyup(function (event) {
    //     console.log(event.keyCode);
    //     console.log('a key was pressed and released');
    // })


    $('#search').on('keyup', function (e) {
        console.log(event.keyCode);
        console.log('a key was pressed and released');
    })

    $('#search').off();

})