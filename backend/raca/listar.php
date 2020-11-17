<?php
 include_once("../conexao.php");

 $consulta = "SELECT * FROM raca";
 $conecta = mysqli_query($conexao,$consulta);
 if(!$conecta){
     die("DEU ERRO");
 }
 $raca = [];

 while($a = mysqli_fetch_array($conecta)){
     $raca[] =[
         "id" => $a['id'],
         "nome" => $a['nome']
     ];
 }
echo json_encode($raca);

?>