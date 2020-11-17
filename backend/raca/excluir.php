<?php
    require_once("../conexao.php");

    $raca_id = filter_input(INPUT_GET,'id');

    $excluir = "DELETE FROM raca ";
    $excluir .= " WHERE id = {$raca_id}";

    $conecta = mysqli_query($conexao, $excluir);
    if(!$conecta){
        die("deu erro");
    }

?>