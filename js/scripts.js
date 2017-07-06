$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var gender = $("input:radio[name=gender]:checked").val();
    var age = parseInt($("input#age").val());
    var country = parseInt($("input#country").val());
    var children = parseInt($("input#children").val());

    if (gender, age, country, children) {
      if (gender === 'male' && age + country + children >= 30) {
        $("#nicole").show();
      } else if (gender === 'male' && age + country + children < 30) {
        $("#scarjo").show();
      } else if (gender === 'female' && age + country + children >= 30) {
        $("#ryan").show();
      } else {
        $("#chris").show();
      }
    }

    event.preventDefault();
  });


});
