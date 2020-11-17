<?php

    include_once("../conexao.php");
    $raca_id = filter_input(INPUT_GET, 'id');
    $consulta = "SELECT * FROM raca ";
    $consulta .=" WHERE id = {$raca_id}";

    $result = mysqli_query($conexao,$consulta);

    if(!$result){
        die("DEU ERRO");
    }

    while($a = mysqli_fetch_array($result)){
        echo json_encode(["id" => $a['id'],
                           "nome" => $a['nome'] ]);
    }



?>