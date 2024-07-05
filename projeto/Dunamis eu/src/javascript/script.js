$(document).ready(function() {
    $('moblie.btn').on('click', function () {
        $('moblie_menu').toggleClass('active');
        $('moblie_btn').find('i').toggleClass('fa-x');
    });
});