// Business logic:
function beepBoop(number) {
  if (number && number>=0) {
    return true;
  } else {
    return false
    
  }
}

// User interface logic:

$(document).ready(function () {

  $("button#getresult").click(function (event) {
    const input = $("#input").val();
    let result= beepBoop(input);
    console.log(result);
    event.preventDefault();
  });

  

});
