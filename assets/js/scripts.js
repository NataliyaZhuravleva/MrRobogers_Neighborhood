// Business logic:

//function that returns array with a range of numbers from 0 to the user inputted number with required exceptions.
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
      } else if (result[i].includes("1")) {
        result[i] = "Beep!";
      }
    }
  } else {
    return false
  }
  return result;
}

//function that transforms array elements into a string with the array elements separated by comma and space. Period after last element.
function showArray(array) {
  let resultString = "";
  for (i = 0; i < array.length - 1; i++) {
    resultString = resultString.concat(" " + '"' + array[i] + '"' + ',');
  }
  resultString = resultString.concat(" " + '"' + array[array.length - 1] + '"' + '.');
  return resultString;

}


// User interface logic:

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const input = $("#input").val();
    if (input && input >= 0) {
      let res = showArray(beepBoop(input));
      $("#result").show().append(" " + res);
    } else {
      $("#warning").show();
    }

  });

});
