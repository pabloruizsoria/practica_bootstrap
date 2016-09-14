$("#btndatos").click(function() {
  $.ajax({
      url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
      dataType: 'json'
    })
    .done(function(futbolistas) {
    	var registro;
      $.each(futbolistas, function(index, futbolista) {
      	registro += '<tr><td>' 
        	+ futbolista.nombre + '</td><td>' 
        	+ futbolista.apellido + '</td><td>' 
        	+ futbolista.equipo + '</td></tr>';
      });
      $('#data').html(registro);

    });

});
