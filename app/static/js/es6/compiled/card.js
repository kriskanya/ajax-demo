(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#getCard').click(getCard);
  }
  function getCard(e) {
    $('#cards').empty();
    $.ajax({
      url: '/cards/getCard',
      type: 'GET',
      success: (function(response) {
        console.log(response);
        var cardNumber = response.cardNumber;
        var suitValue = response.suitValue;
        $('#cards').css({
          'background': 'url(../img/cards.gif)',
          'background-position': (cardNumber * -80.77) + 'px ' + (suitValue * -117.5) + 'px',
          'width': '80.77px',
          'height': '117.5px'
        });
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=card.map
