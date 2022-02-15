(function() {
    /*
practice question 1
when button with id change-p1 is clicked, change the text in the p element with id p1 to "I am changed"
 */
    $("#change-p1").click(function() {
        $("#p1").html("<b>I am changed</b>");
    });

    /*
    question 2: set the background color for all p elements with a class of p2-class to orange
    */
    $("p.p2-class").css("background-color", "orange");

    /*
    question 3: set the direct li children of the ul with id "list1" to font-weight bold
     */
    $("#list1>li").css("font-weight", "bold");

    /* question 4: when the p with an id of p3 is clicked, replace its contents with its data-stuff value. within the click handling function, change p3's contents using the this keyword
     */
    $("#p3").click(function() {
        var dataVal = $(this).data("stuff");
        $(this).html(dataVal);
    });

    /* question 5:
    when the button with id input1-button is clicked,
    change the background  color of the p with id p4
    to the color typed into the text field with the id input1

    1 when input1-button's click handler fires
        2 set q5Color = input1's text value
        3 set p4's background color to q5Color
     */
    $("#input1-button").click(function() {
        var q5Color = $("#input1").val();
        $("#p4").css("background-color", q5Color);
        // $("body").css("color", q5Color);
    });

    /*
    question 6
    when the li with id q6-li is clicked
    toggle the font-weight of the 3rd li in list 3 from bold to normal

    1 when q6-li's click handler fires
        2. set a variable for q6-li's parent
        3. set a variable for the parent's next sibling (next())
        4. toggle the uncle's font-weight
     */
    $("#q6-li").click(function() {
        var q6Parent = $(this).parent();
        var q6Uncle = q6Parent.next();
        // q6Uncle.addClass("bold-class");
        q6Uncle.toggleClass("bold-class");
    });
})();

