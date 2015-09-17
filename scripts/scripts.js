var map;
var arrayDePontos = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -3.7318616, lng: -38.5266704},
    zoom: 12
  });

  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
  	geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
	var address = document.getElementById('address').value;
  	 posicionarPorEndereco(address, geocoder, resultsMap)
}

function posicionarPorEndereco(endereco, geocoder, resultsMap){
	geocoder.geocode({'address': endereco}, function(results, status) {
    	if (status === google.maps.GeocoderStatus.OK) {
	    	resultsMap.setCenter(results[0].geometry.location);
	      	var marker = new google.maps.Marker({
		        map: resultsMap,
		        position: results[0].geometry.location,
		        draggable:true
	      	});
	      	arrayDePontos.push(marker);
	      	map.setZoom(20)
	    } else {
	    	alert('Geocode was not successful for the following reason: ' + status);
	    }
	});
}

//Botão que abre o popup para cadastrar academia.
$(function() {
    $( "#butCadastrarAcademia" )
      .button()
      .click(function( event ) {
      	
        var dialog = 
        $( "#dialogCadastro" ).dialog({
		  autoOpen: true,
		  height: 400,
		  width: 450,
		  modal: false,
		  buttons: {
		    "Cadastrar Academia": cadastrarAcademia,
		    Cancel: function() {
		      dialog.dialog( "close" );
		    }
		  },
		  close: function() {
		   dialog.dialog( "close" );
		  }
		});
      });

      $('#campoEstado').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
      $('#campoCidade').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
      $('#campoBairro').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
      $('#campoRua').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
      $('#campoNumero').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
});

function somarInformacoesEPosicionarMarker(){
	var endereco = $('#campoEstado').val() + ', ';
	endereco += $('#campoCidade').val() + ', ';
	endereco += $('#campoBairro').val() + ', ';
	endereco += $('#campoRua').val() + ', ';
	endereco += $('#campoNumero').val()
	alert(endereco);
	removerTodosOsPontos();
  	geocoder = new google.maps.Geocoder();
  	posicionarPorEndereco(endereco, geocoder, map)
}

function cadastrarAcademia(){
	$.post( "php/cadastros.php", function( data ) {
		//$( ".result" ).html( data );
		alert('enviado!!!')
	});
}

function removerTodosOsPontos(){
	for (var i = 0; i < arrayDePontos.length; i++) {
    arrayDePontos[i].setMap(null);
  }
}
