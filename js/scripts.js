$(document).ready(function() {
  $("#word-puzzle").submit(function(event) {
    event.preventDefault();
    var letters = $("input#phrase").val().split("")


    for (var letter = 0; letter <= letters.length; letter += 1) {
      if (letters[letter] === "a" || letters[letter] === "i" || letters[letter] === "e" || letters[letter] === "o" || letters[letter] === "u") {
         $("#output").append("-");
      } else {
        $("#output").append(letters[letter]);
      }
    };
    $(".sentence").show();
    $(".sentence").click(function() {
      $(".sentence").show();
      $("#output").empty();

    });
  });
});
