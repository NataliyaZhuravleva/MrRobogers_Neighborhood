// Business logic:
function beepBoop(number) {
  result = [];
  if (number && number >= 0) {
    for (let i = 0; i <= number; i++) {
      result[i] = String(i);
    };
    for (i = 0; i < result.length; i++) {
      if (result[i].includes("3")) {
        result[i] = "Won't you be my neighbor?";
      } else if (result[i].includes("2")) {
        result[i] = "Boop!";
      } else if (result[i].includes("1")){
        result[i] = "Beep!";
      }
    
  }
} else {
  return false
}
console.log(result);
}

// User interface logic:

$(document).ready(function () {
  $("button#getresult").click(function (event) {
    const input = $("#input").val();
    beepBoop(input);

    event.preventDefault();
  });



});
