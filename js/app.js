'use strict';
$(function() {
  var $screen = $('#screen');
  var numArray = [];
  var numArray2 = [];
  var operator = "";
  var $answer;
  var $span = $('span');
  var $clear = $('#clear');
  var $operator = $('.operator');
  var $equal = $('#equals');

  function display(event) {
    var $this = $(this);
    var $stringChar = $this.text();
    var $intChar = parseInt($stringChar);

    $screen.append($this.text());
    if (!isNaN($intChar)) {
      numArray.push($intChar);
    }
  }

  function clear(event) {
    $screen.text("");
    numArray.length = 0;
    numArray2.length = 0;
    operator = "";
  }

  function addToArray(event) {
    var $this = $(this);
    if (numArray.length !== 0) {
    numArray2.push(parseInt(numArray.join('')));
    }
    numArray = [];
  }

  function operators(event) {
    var $this = $(this);
    if ($this.text() !== '=') {
      operator += $this.text();
    } else {
      operator = operator;
    }
    if (operator.length > 1) {
      $screen.text("Error");
    }
  }

  function math(event) {
    if (operator === '÷') {
      $answer = numArray2[0]/numArray2[1];
      $screen.text(numArray2[0]/numArray2[1]);
      if (numArray2[0]/numArray2[1] === Infinity) {
        $screen.text("Error");
      }
    } else if (operator === 'x') {
      $screen.text(numArray2[0]*numArray2[1]);
      $answer = numArray2[0]*numArray2[1];
    } else if (operator === '+') {
      $screen.text(numArray2[0]+numArray2[1]);
      $answer = numArray2[0]+numArray2[1];
    } else if (operator === '-') {
      $screen.text(numArray2[0]-numArray2[1]);
      $answer = numArray2[0]-numArray2[1];
    }
    operator = "";
    numArray2 = [$answer];
  }

  $span.click(display);
  $clear.click(clear);
  $operator.click(addToArray);
  $operator.click(operators);
  $equal.click(math);
});
