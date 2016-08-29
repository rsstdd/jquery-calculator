$(function() {

    var $screen = $('#screen');
    var $operators = $('.operator');
    var $equals = $('#equals');
    var $input = [];
    var $position1 = [];
    var $position2 = '';
    var $operator = '';

  //  position2 = /\D+/.exec(str)[1];
//(\d+)(?!.*\d)
  // for(var i = arr.length; i--;) {
  //         if(arr[i] === item) {
  //             arr.splice(i, 1);
  //         }
  //    for(var i = $input.length; i--;) {
  //     if($input[i] === $operators) {
  //         arr.splice(i, 1);
  //     }
  //   }
  //str.substring(0, str.indexOf(":"));
  //$position2 = $position2.substring(0, $position2.indexOf($operators));
  //$position2 = $input.slice(-1).pop();


    $('span').not('operator').on('click', display = function(event) {
        var $this = $(this);
        $screen.append($this.text());
        if (!($this.hasClass('operator'))) { //Why isn't this working?
            $input.push($screen.text());
            $position1 = (parseInt($input)); //should be the last number that was selected
       }
    });

    $('.operator').on('click', math =  function(event){
      if ($(event.target).attr('id') !== 'equals') { //if the id is not equals
        //$position2 = $input.pop(); //Try: position********  $position2 = $position1.slice(-1).pop();
        // $position2 = $position2.substring(0, $position2.indexOf($operators));
        // $position2 = $input.slice(-1).pop();
        //$position2 = parseInt($input); // -> position one is the numeral of the input value
        $operator = $(event.target).text(); // -->the operator is the one that you select. saved as a string
      }
    });



    $('#equals').on('click', equals = function(event) {
      $position2 = /\D+/.exec($input.pop())[1];
      console.log($position2);
      if ($operator === '+') {
        $screen.text($position1 + $position2);
        console.log();
      } else if ($operator === '-') {
        $screen.text($position1 - $position2);
      } else if ($operator  === '÷') {
        $screen.text($operator / $position2);
      } else if ($operator === 'x') {
        $screen.text($operator * $position2);
      }
    });

    $('#clear').on('click', clear = function(event) {
        $screen.empty();
        $position1 = '';
        $position2 = '';
        $input = [];
    });

});
//

//two arrs <--one to hold all numbers
// if the operands are pressed, join and store in another arr
//push numbers in the first array
//complete the operation.
// equals.on('click', function() {
//     var firstInput = parseFloat(input.attr('name'));
//     var secondInput = parseFloat(input.val());
//     if (equals.hasClass('add')) {
//         input.val(firstInput + secondInput);
//     } else if (equals.hasClass('subtract')) {
//         input.val(firstInput - secondInput);
//     } else if (equals.hasClass('multiply')) {
//         input.val(firstInput * secondInput);
//     } else if (equals.hasClass('divide')) {
//         input.val(firstInput / secondInput);
//     }
// });
//!== ('+') && $this.text() !== ('') && $this.text() !== ('') && $this.text() !== ('')) {
// for (var i = 0; i < $input.length; i++) {
//   if (!isNaN) {
//     $position2.push($input[i]);
//   }
// }


//can you slice out the part after the operator? And save it to yet another array? Duh, slice.
//


//save the operator to a variable/string


//operator function
// $position1 = parseInt($input);
// $(.operator).on('click', maths = funciton(event) {
//     if (event.target.attr('id') !== 'equals') {
//         $position1 = parseInt($input);
//
//     }
// });
