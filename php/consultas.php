<?php 
require_once('conexao.php'); 

function consultarEquipes(){
	try{
		$conexao = getConexao();
		$resultado = pg_query($conexao, "select * from mapa_academias.tb_equipe");
		$arrayEquipes = array();		
		$indice = 0;
		while($linha = pg_fetch_array($resultado)) {
			$equipe = new Equipe();
			$equipe->idEquipe = $linha['ci_equipe'];
			$equipe->enderecoLogo = $linha['ds_endereco_logo'];
			$equipe->nomeEquipe = $linha['nm_equipe'];
			$equipe->nomeLider = $linha['nm_lider'];
			$equipe->descricaoEquipe = $linha['ds_equipe'];

			$arrayEquipes[] = $equipe;
		}
		return $arrayEquipes;
	} catch (Exception $e) {
    	echo 'Exceção capturada: ',  $e->getMessage(), "\n";
	}
}

?>