(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#rollDie').click(rollDie);
  }
  function rollDie(e) {
    $('#resultDie').empty();
    $.ajax({
      url: '/rollOne/roll',
      type: 'GET',
      success: (function(response) {
        var diceNumber = (response.die);
        console.log(response.die);
        var $img = $('<img>');
        $img.attr('src', '/img/dice-' + diceNumber + '.png');
        $('#resultDie').append($img);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=rollOne.map
