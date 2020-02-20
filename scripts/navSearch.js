$(document).ready(function(){
    $("#navInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".entry").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    });
});