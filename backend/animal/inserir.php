<?php

    require_once('../conexao.php');
    $nome = filter_input(INPUT_POST,'nome');
    $iddono = filter_input(INPUT_POST, 'iddono');
    $idraca = filter_input(INPUT_POST,'idraca');
    $sql = "INSERT INTO animal (nome, iddono, idraca) VALUES ('$nome','$iddono','$idraca')";
    $result = mysqli_query($conexao, $sql);

?>