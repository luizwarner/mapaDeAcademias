var map;
var arrayDePontos = [];
var posicaoAux;
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
	    	posicaoAux = results[0].geometry.location;
	      	var marker = new google.maps.Marker({
		        map: resultsMap,
		        position: results[0].geometry.location,
		        draggable:true
	      	});
	      	arrayDePontos.push(marker);
	      	map.setZoom(20)
	    } else {
	    	//alert('Geocode was not successful for the following reason: ' + status);
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

      $('#estado').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
      $('#cidade').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
      $('#bairro').blur(function(){
       	somarInformacoesEPosicionarMarker();
      })
      $('#rua').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
      $('#numero').blur(function(){
    	somarInformacoesEPosicionarMarker();
      })
});

function somarInformacoesEPosicionarMarker(){
	var endereco = $('#estado').val() + ', ';
	endereco += $('#cidade').val() + ', ';
	endereco += $('#bairro').val() + ', ';
	endereco += $('#rua').val() + ', ';
	endereco += $('#numero').val()
	//alert(endereco);
	removerTodosOsPontos();
  	geocoder = new google.maps.Geocoder();
  	posicionarPorEndereco(endereco, geocoder, map)
}

function cadastrarAcademia(){

	nomeAcademia = $('#nomeAcademia').val();
	estado = $('#estado').val();
	cidade = $('#cidade').val();
	bairro = $('#bairro').val();
	rua = $('#rua').val();
	numero = $('#numero').val();
	descricao = $('#descricao').val();
	cdEquipe = $('#cdEquipe').val();

	var posicaoStr = "("+posicaoAux.lat()+", "+posicaoAux.lng()+")";

	$.post( "php/scripts.php", {operacao:'cadastrarAcademia', nomeAcademia:nomeAcademia, posicao:posicaoStr, 
								estado:estado, cidade:cidade, bairro:bairro, rua:rua, numero:numero, 
								descricao:descricao, cdEquipe:cdEquipe})
		.done(function( data ) {
			//$( ".result" ).html( data );
			alert('enviado!!!')
		}).fail(function(){
			alert('faiô!!!')
		});
}

function removerTodosOsPontos(){
	for (var i = 0; i < arrayDePontos.length; i++) {
    arrayDePontos[i].setMap(null);
  }
}

function consultarEquipes(){	
	$.post( "php/scripts.php", {operacao:'consultarEquipes'})
		.done(function( data ) {
			$( ".result" ).html( data );
			alert('enviado!!!')
		}).fail(function(){
			alert('faiô!!!')
		});
}