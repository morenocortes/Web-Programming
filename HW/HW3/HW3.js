
  function getUserInput(){
    var userInput = prompt("Enter an integer number N: ");
    return userInput;
  }

  function fibSequenceTableRows(n) {


      var table = document.getElementById("FibTable");

      var fib = 0;
      var fibPrev = 1;
      var nextFib = 0;
      for(i=0 ; i < n; i++){

          if(i > 0){

              nextFib = fib + fibPrev;
              fibPrev = fib
              fib = nextFib
          }

          rowCount = table.rows.length;
          row = table.insertRow(rowCount);
          row.insertCell(0).innerHTML = (i + 1);
          row.insertCell(1).innerHTML = fib ;

    }
  }
