<?php
/*if(!@($conexao=pg_connect ("host=localhost dbname=postgres port=5432 user=postgres password=root"))) {
   print "Não foi possível estabelecer uma conexão com o banco de dados.";
} else {
   pg_close ($conexao);
   print "Conexão OK!"; 
}*/

function getConexao(){
	//if($conexao == null or $conexao == undefined){
	$conexao = pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=root") or die ("Não foi possivel conectar ao servidor PostGreSQL");
	//}
	return $conexao;
}

//$result = pg_query($conexao, "select * from mapa_academias.tb_faixa");

/*$i = 0;
echo '<html><body><table><tr>';
while ($i < pg_num_fields($result))
{
	$fieldName = pg_field_name($result, $i);
	echo '<td>' . $fieldName . '</td>';
	$i = $i + 1;
}
echo '</tr>';
$i = 0;

while ($row = pg_fetch_row($result)) 
{
	echo '<tr>';
	$count = count($row);
	$y = 0;
	while ($y < $count)
	{
		$c_row = current($row);
		echo '<td>' . $c_row . '</td>';
		next($row);
		$y = $y + 1;
	}
	echo '</tr>';
	$i = $i + 1;
}
pg_free_result($result);

echo '</table></body></html>';*/

//$count = pg_fetch_result($result);
//print $count;

?>