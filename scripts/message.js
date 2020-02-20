<script>
function myFunction() {
    var message;
    if ({{AM2}} = text-warning) {
        message = "This DNA Feature is deprecated and not in use";
    } else if ({{AM2}} =text-success) {
        message = "User has access to the DNA Feature";
    } else {
        message = "User does not have access to DNA Feature";
}
document.getElementById("demo").innerHTML = message;
}
</script>