// Business logic:

//Function that returns array with a range of numbers from 0 to the user inputted number with required exceptions.
function beepBoop(number, name) {
  result = [];
  //Add array with a range of numbers from 0 the user inputed number and transform array elements into strings
  for (let i = 0; i <= number; i++) {
    result[i] = String(i);
  };
  //Exception's handling
  for (i = 0; i < result.length; i++) {
    if (result[i].includes("3")) {
      let stringPlusName = "Won't you be my neighbor,";
      stringPlusName = stringPlusName.concat(" " + name + "?");
      result[i] = stringPlusName;
    } else if (result[i].includes("2")) {
      result[i] = "Boop!";
    } else if (result[i].includes("1")) {
      result[i] = "Beep!";
    }
  }
  return result;
}

//Function that transforms array elements into a string with the array elements separated by comma and space. Period after last element.
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
    const inputtedName = $("#name").val();

    if (input && input >= 0) {
      $("#warning").hide();
      res = showArray(beepBoop(input, inputtedName));
      $("#result-title").show();
      $("#result").text(res).show();
    } else {
      $("#result").hide();
      $("#warning").show();
    }
  });
});
