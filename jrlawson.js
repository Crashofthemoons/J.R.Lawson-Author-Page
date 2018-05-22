

var data = {
    name: $('nameField').val(),
    email: $('emailField').val(),
    subject: $('subjectField').val(),
    message: $('messageField').val()
};

$.ajax({
    type: "POST",
    url: "email-php.php",
    data: data,
    sucess: function () {
        $('.sucess').fadeIn(1000);
    }
});