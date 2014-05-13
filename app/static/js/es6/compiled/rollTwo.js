(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#rollDice').click(rollDice);
  }
  function rollDice(e) {
    $('#resultDice1').empty();
    $('#resultDice2').empty();
    $.ajax({
      url: '/rollTwo/roll',
      type: 'GET',
      success: (function(response) {
        var $img1 = $('<img src = /img/dice-' + response.dice1 + '.png>');
        var $img2 = $('<img src = /img/dice-' + response.dice2 + '.png>');
        $('#resultDice1').append($img1);
        $('#resultDice2').append($img2);
        if (response.dice1 === response.dice2) {
          $('#winner').text('winner!');
        } else {
          $('#winner').text('loser!');
        }
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=rollTwo.map
