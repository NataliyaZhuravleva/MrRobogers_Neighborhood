// Business logic:
function beepBoop(number) {
  result=[];
  if (number && number>=0) {
    for (i=0; i<=number; i++){
      result.push(i);
    };
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
