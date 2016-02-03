$(document).ready(function() {
  $('#menuToggler').click(function() {
    $('#borderOff').css('padding','0')
  });
  maintainSameHeight($('[data-same-height="blockquote-text"]'));

  function maintainSameHeight($list) {
    var height = 0;

    $list.each(function () {
      var $this = $(this);
      if ($this.outerHeight() > height) {
        height = $this.outerHeight();
      }
    });

    $list.css("height", height);
  }
});
