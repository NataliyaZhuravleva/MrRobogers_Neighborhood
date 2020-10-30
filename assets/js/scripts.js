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
      } else if (result[i].includes("1")) {
        result[i] = "Beep!";
      }
    }
  } else {
    return false
  }
  return result;
}

function showArray(array){
  let resultString="";
  for (i=0;i<array.length-1;i++){
    resultString=resultString.concat(" " + '"'+array[i]+'"'+',');
  }
  resultString=resultString.concat(" "+ '"'+array[array.length-1]+'"'+'.');
  return resultString;
  
}
  

// User interface logic:

$(document).ready(function () {
  $("button#getresult").click(function (event) {
    const input = $("#input").val();
    let res=showArray(beepBoop(input));
    $("#result").show().append(" " + res);
console.log(res);
    event.preventDefault();
  });


  //var x = makeArray();
  //document.write(showArray(x));
});
