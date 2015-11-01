var url = "http://localhost:1112";

$(function() {

});

$( "#submit" ).click(function() {
  new Fingerprint2().get(function(result){
    var data = {
      firstName : $('#first-name').val(),
      lastName : $('#last-name').val(),
      fingerprint : result
    };

    $.post( "test.php", { name: "John", time: "2pm" }).done(success);
  });
});

var success = function(data) {
  $( ".result" ).html( data );
}
