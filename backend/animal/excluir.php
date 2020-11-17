<?php


     require_once('../conexao.php');
     $animal_id = $_GET['id'];

     $excluir = "DELETE FROM animal ";
     $excluir .= " WHERE id = {$animal_id}";
     $resultado = mysqli_query($conexao,$excluir);

     if(!$resultado){
         die("ERRO NA EXCLUSÃO !!");
     }


?>