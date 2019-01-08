$(document).ready(function() {
  $('#example').DataTable();

  $('.carousel').carousel({
      interval:5000,
      pause:'hover'
  });

  $('#exampleModal').on('show.bs.modal', function (event) {
      const button = $(event.relatedTarget);
      const recipient = button.data('whatever');
      const modal = $(this);
      modal.find('.modal-title').text('New message to ' + recipient);
      modal.find('.modal-body input').val(recipient);
  })

    $('.example-popover').popover({
        trigger: 'focus'
    });



} );

(function() {
    'use strict';
    window.addEventListener('load', function() {

        const forms = document.getElementsByClassName('needs-validation');
        const validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();