<?php
    $banco = 'localhost';
    $user = 'root';
    $senha = "";
    $db = "petshop";
    try{
        $conexao = mysqli_connect($banco,$user,$senha,$db);
    }catch(Exception $error){
        print_r($error);
    }

?>