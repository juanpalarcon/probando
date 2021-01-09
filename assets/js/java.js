$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#favoritos").click(function () {
    alert("Fue añadidos a tus favoritos ;)");
  });

  $("#enviarPorCorreo").click(function () {
    alert("El correo fue enviado correctamente");
  });

  $(".titulos").on("dblclick", function () {
    $(this).css("color", "red");
  });

  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});
