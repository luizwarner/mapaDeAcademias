<?php
require_once('conexao.php'); 
require_once('classes/Equipe.php');

//function cadastrarAcademia(){
if(isset($_REQUEST['operacao'])){
	$operacao = $_REQUEST['operacao'];

	if($operacao == 'cadastrarAcademia'){

		
		cadastrarAcademia();

	}
}




/*
$name = 'arquivo.txt';
$text = 'Olá. Eu sou Goku';
$file = fopen($name, 'a');
fwrite($file, $posicao);
fclose($file);*/
//}

function cadastrarAcademia(){

	$nomeAcademia = $_REQUEST['nomeAcademia'];
	$estado = $_REQUEST['estado'];
	$cidade = $_REQUEST['cidade'];
	$bairro = $_REQUEST['bairro'];
	$rua = $_REQUEST['rua'];
	$numero = $_REQUEST['numero'];
	$posicao = $_REQUEST['posicao'];
	$descricao = $_REQUEST['descricao'];
	$cdEquipe = $_REQUEST['cdEquipe'];
	

	$conexao = getConexao();
	pg_query($conexao, "insert into mapa_academias.tb_academia (
		nm_academia, 
		ds_posicao, 
		nm_estado, 
		nm_cidade, 
		nm_bairro, 
		nm_rua, 
		nr_academia, 
		ds_academia, 
		cd_equipe) 
	values( '".getValor($nomeAcademia)."', 'getValor($posicao)', 'getValor($estado)', 
			'getValor($cidade)', 'getValor($bairro)', 'getValor($rua)', '2930', 
			'getValor($descricao)', $cdEquipe)");
}

function getValor($valor = ''){

	if(is_null($valor)){
		return '';
	}
	return $valor;
}

function getValorInteiro($valor = 0){

	if(is_null($valor)){
		return 0;
	}
	return $valor;
}



?>