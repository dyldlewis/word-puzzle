$(document).ready(function() {
  $("#word-puzzle").submit(function(event) {
    event.preventDefault();
    var letters = $("input#phrase").val().split("")


    var newLetters = letters.map(function(letter) {
      if (letter === "a" || letter === "i" || letter === "e" || letter === "o" || letter === "u") {
        return "-";
      } else {
        return letter;
      }


    });

    newLetters = newLetters.join(" ")
    alert(newLetters)
    console.log(newLetters)




  });
});
