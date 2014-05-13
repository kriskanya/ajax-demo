(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#rollDie').click(rollDie);
  }

  function rollDie(e){
    $('#resultDie').empty();

    $.ajax({
      url:'/rollOne/roll',    //url is where are we sending this data to
      type: 'GET',      //the type is the verb, the data that you're sending along with the url
      success: response => {  //this is a funcion that will get called when the response comes back
        var diceNumber = (response.die);
        console.log(response.die);
        var $img = $('<img>');
        $img.attr('src', '/img/dice-' + diceNumber + '.png');
        $('#resultDie').append($img);
      }
    });

    e.preventDefault();  //preventing the default behavior of the form submitting itself
  }


})();
