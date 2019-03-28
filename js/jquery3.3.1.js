$(document).ready(function() {
  $("#form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var phoneInput= $("input#phone").val();
    var emailInput = $("input#email").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);


    $("#contacts").show();

    event.preventDefault();
  });
});
