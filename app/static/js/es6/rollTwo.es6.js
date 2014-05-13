(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#rollDice').click(rollDice);
  }

  function rollDice(e){
    $('#resultDice1').empty();
    $('#resultDice2').empty();

    $.ajax({
      url:'/rollTwo/roll',    //url is where are we sending this data to
      type: 'GET',      //the type is the verb, the data that you're sending along with the url
      success: response => {  //this is a funcion that will get called when the response comes back

        var $img1 = $('<img src = /img/dice-' + response.dice1 + '.png>');
        var $img2 = $('<img src = /img/dice-' + response.dice2 + '.png>');

        $('#resultDice1').append($img1);
        $('#resultDice2').append($img2);

        if(response.dice1 === response.dice2){
          $('#winner').text('winner!');
        } else{
          $('#winner').text('loser!');
        }
      }
    });

    e.preventDefault();  //preventing the default behavior of the form submitting itself
  }


})();
