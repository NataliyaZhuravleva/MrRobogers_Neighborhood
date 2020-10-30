// Business logic:
function beepBoop(number) {
  result = [];
  if (number && number >= 0) {
    for (let i = 0; i <= number; i++) {
      result[i] = String(i);
    };
    for (i = 0; i < result.length; i++) {
      if (result[i] === "3") {
        result[i]="Won't you be my neighbor?";
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
