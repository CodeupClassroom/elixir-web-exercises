( function() {
    "use strict;"

    function getNewRow() {
        return `
<tr>
    <td>
        <input type="text" placeholder="Type something">
    </td>
    <td>
        <button class="remove-button" onclick="$(this).parent().parent().remove();">Remove</button>    
    </td>
</tr>
`;
    }

    $(document).ready(function() {
        $("#add-button").click(function() {
            const newRow = getNewRow();
            $("#my-tbody").append(newRow);

            // $(".remove-button").click(function(event) {
            //     $(this).parent().parent().remove();
            // });
        });

    });

})();