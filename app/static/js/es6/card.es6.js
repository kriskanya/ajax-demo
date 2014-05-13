(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getCard').click(getCard);
  }

  function getCard(e){
    $('#cards').empty();

    $.ajax({
      url:'/cards/getCard',    //url is where are we sending this data to
      type: 'GET',      //the type is the verb, the data that you're sending along with the url
      success: response => {  //this is a funcion that will get called when the response comes back
        console.log(response);
        var cardNumber = response.cardNumber;
        var suitValue = response.suitValue;

        $('#cards').css({'background': 'url(../img/cards.gif)',
                        'background-position': (cardNumber * -80.77) + 'px ' + (suitValue * -117.5) + 'px',
                        'width': '80.77px',
                        'height': '117.5px'
    });

        // $('#cards').css('width', '1050px');
        // $('#cards').css('height', '470px');


        // $('#cards').css('background-image', response.sum);
      }
    });

    e.preventDefault();  //preventing the default behavior of the form submitting itself
  }


})();
