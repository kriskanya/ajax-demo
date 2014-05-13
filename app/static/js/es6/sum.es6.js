(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add(e){
    var data = $('#sum').serialize();  //refers to the form you're submitting; serialize pulls out the inputs and puts them into strings for you
    console.log(data);

    $.ajax({
      url:'/sum',    //url is where are we sending this data to
      type: 'POST',      //the type is the verb, the data that you're sending along with the url
      data: data,          //data is the the thing that you are sending
      success: response => {  //this is a funcion that will get called when the response comes back
        $('#result').text(response.sum);
      }
    });

    e.preventDefault();  //preventing the default behavior of the form submitting itself
  }


})();
