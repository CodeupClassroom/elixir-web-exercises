// Using vanilla JS
// document.getElementsByClassName('button').addEventListener('click', function () {
//     console.log("A button was clicked");
// })


$(document).ready(function () {

    alert('Hello from jquery');

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
        })

})