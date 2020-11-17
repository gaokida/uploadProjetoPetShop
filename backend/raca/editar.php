<?php

    require_once("../conexao.php");

    $raca_id = filter_input(INPUT_POST, 'id');
    $raca_nome = filter_input(INPUT_POST,'nome');

    $editar = "UPDATE raca SET";
    $editar .=" nome = '$raca_nome'";
    $editar .=" WHERE id = '$raca_id'";

    mysqli_query($conexao,$editar);


?>