
  function getUserInput(){
    var userInput = prompt("Enter an integer number N: ");
    return userInput;
  }

  function fibSequenceTableRows(n) {


      var fib = 0;
      var fibPrev = 1;
                                                                                                                                                  var nextFib = 0;
      for(i=0 ; i <= n; i++){

          if(i > 0){

              nextFib = fib + fibPrev;
              fibPrev = fib
              fib = nextFib
          }

          document.write("<tr> <td>" + i + "</td> <td>" + fib + "</td> </tr>");

    }
  }
