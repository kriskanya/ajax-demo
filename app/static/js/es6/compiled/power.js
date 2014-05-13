(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#pow').click(pow);
  }
  function pow(e) {
    var data = $('#power').serialize();
    console.log(data);
    $.ajax({
      url: '/power',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#resultPow').text(response.power);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=power.map
