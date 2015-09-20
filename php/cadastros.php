<?php
//function cadastrarAcademia(){
$operacao = $_REQUEST['operacao'];

if($operacao == 'cadastrarAcademia'){

	$estado = $_REQUEST['estado'];
	$cidade = $_REQUEST['cidade'];
	$bairro = $_REQUEST['bairro'];
	$rua = $_REQUEST['rua'];
	$numero = $_REQUEST['numero'];
	$estado = $_REQUEST['posicao'];



}


$name = 'arquivo.txt';
$text = 'Olá. Eu sou Goku';
$file = fopen($name, 'a');
fwrite($file, $posicao);
fclose($file);
//}

function cadastrarAcademia( $estado, $cidade, $bairro, $rua, $numero, $posicao ){
	
}

?>