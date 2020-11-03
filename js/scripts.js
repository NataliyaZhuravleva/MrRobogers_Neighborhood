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

//Function that reverse array
function reverseResult(arrayToReverse) {
  let reverseResult = [];
  for (i = arrayToReverse.length - 1; i >= 0; i--) {
    reverseResult.push(arrayToReverse[i]);
  }
  return reverseResult;
}

function resultShow(result) {
  $("#reverse_result_title").hide()
  $("#reverse_result").hide();
  $("#warning").hide();
  $("#warning_name").hide();
  $("#result_title").show();
  $("#result").text(result).show();
}
function reverseResultShow(reverseResult) {
  $("#result_title").hide();
  $("#result").hide();
  $("#warning").hide();
  $("#warning_name").hide();
  $("#reverse_result_title").show();
  $("#reverse_result").text(reverseResult).show();
}
function noNumber() {
  $("#result_title").hide();
  $("#result").hide();
  $("#reverse_result_title").hide();
  $("#reverse_result").hide();
  $("#warning_name").hide();
  $("#warning").show();
}

function noName() {
  $("#result_title").hide();
  $("#result").hide();
  $("#reverse_result_title").hide();
  $("#reverse_result").hide();
  $("#warning").hide();
  $("#warning_name").show();
}

function noNumberNoName() {
  $("#result_title").hide();
  $("#result").hide();
  $("#reverse_result_title").hide();
  $("#reverse_result").hide();
  $("#warning").show();
  $("#warning_name").show();
}

// User interface logic:

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const input = $("#input").val();
    let inputtedName = $("#name").val();
    let res="";

    //if all fields are filled, then invoking function
    if (input && input >= 0 && inputtedName) {
      res = showArray(beepBoop(input, inputtedName));
      resultShow(res);
    }
    //checking if the user didn't enter appropriate number or name, or both   
    else if ((!input || input < 0) && inputtedName) {
      noNumber();
    } else if (input && input >= 0 && !inputtedName) {
      noName();
    } else if (!inputtedName && (!input || input < 0)) {
      noNumberNoName();
    }
    //Reverse result button click
    $("button#reverse_result_btn").click(function (event) {
      if (input && input >= 0 && inputtedName && res) {
        revRes = showArray(reverseResult(beepBoop(input, inputtedName)));
        reverseResultShow(revRes);
      } else if ((!input || input < 0) && inputtedName) {
        noNumber();
      } else if (input && input >= 0 && !inputtedName) {
        noName();
      } else if (!inputtedName && (!input || input < 0)) {
        noNumberNoName();
      } else if (!res) {
        $("#result_title").hide();
        $("#result").hide();
        $("#reverse_result_title").hide();
        $("#reverse_result").hide();
        $("#warning").hide();
        $("#warning_name").hide();
        $("#warning_get_result").show();  
        console.log(res);
      }
    });
  });

});
