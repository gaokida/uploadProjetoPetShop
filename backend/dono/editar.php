<?php

    require_once("../conexao.php");
    $id = filter_input(INPUT_POST,'id');
    $nome = filter_input(INPUT_POST,'nome');
    $telefone = filter_input(INPUT_POST,'telefone');

    $editar = "UPDATE dono SET ";
    $editar .=" nome ='$nome', telefone ='$telefone' ";
    $editar .=" WHERE id = $id";

    mysqli_query($conexao,$editar);


?>