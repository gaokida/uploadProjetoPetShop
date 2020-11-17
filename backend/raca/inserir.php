<?php
    require_once("../conexao.php");


    $raca_nome = filter_input(INPUT_POST, 'nome');

    $inserir = "INSERT INTO raca (nome) ";
    $inserir .=" VALUES('$raca_nome')"; 

    mysqli_query($conexao,$inserir);


?>