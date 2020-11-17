<?php
    include_once("../conexao.php");
    $consulta = "SELECT * FROM dono";

    $resul = mysqli_query($conexao,$consulta);

    if(!$resul){
        die("DEU ERRO");
    }
    $dono = [];
    while($a = mysqli_fetch_array($resul)){
        $dono[] = [
            "id" => $a['id'],
            "nome" => $a['nome'],
            "telefone" => $a['telefone']
        ];

    }
    echo json_encode($dono);
?>