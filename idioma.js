$(document).ready(function() {
    $("#idioma").click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
            $('.card-text').css('visibility', 'visible');
            $('.card-text-en').css('visibility', 'hidden');
        } else {
            $('.card-text').css('visibility', 'hidden');
            $('.card-text-en').css('visibility', 'visible');
           
        }
    });
});