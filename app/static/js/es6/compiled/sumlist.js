(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#addList').click(addList);
  }
  function addList(e) {
    var data = $('#sumList').serialize();
    console.log(data);
    $.ajax({
      url: '/sumlist',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#resultSumList').text(response.sumList);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=sumlist.map
