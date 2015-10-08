<?php
require_once('conexao.php'); 
require_once('classes/Equipe.php');

//function cadastrarAcademia(){
if(isset($_REQUEST['operacao'])){
	$operacao = $_REQUEST['operacao'];

	if($operacao == 'cadastrarAcademia'){

		/*$estado = $_REQUEST['estado'];
		$cidade = $_REQUEST['cidade'];
		$bairro = $_REQUEST['bairro'];
		$rua = $_REQUEST['rua'];
		$numero = $_REQUEST['numero'];
		$posicao = $_REQUEST['posicao'];
		*/
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
	$conexao = getConexao();
	pg_query($conexao, "insert into mapa_academias.tb_faixa (nm_faixa, nr_graus) values('teste', 100)");
}



?>