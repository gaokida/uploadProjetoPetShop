<?php
    
    require_once("../conexao.php");
    $id = filter_input(INPUT_POST, 'id');
    $nome = filter_input(INPUT_POST,'nome');
    $iddono = filter_input(INPUT_POST,'iddono');
    $idraca = filter_input(INPUT_POST,'idraca');

    $editar = "UPDATE animal SET ";
    $editar .= " nome = '$nome', iddono = '$iddono', idraca = '$idraca' ";
    $editar .=" WHERE id = $id";

    $resul = mysqli_query($conexao, $editar);

?>