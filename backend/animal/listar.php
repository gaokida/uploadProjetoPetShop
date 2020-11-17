<?php
    require_once("../conexao.php");

    $consulta = "select a.*,r.nome as nome_raca , d.nome as nome_dono from animal a ";
    $consulta .= " inner join raca r on r.id = a.idraca ";
    $consulta .= " inner join dono d on d.id = a.iddono";
    $conecta = mysqli_query($conexao,$consulta);
    if(!$conecta){
        die("ERRO NO BANCO");
    }

    $animal = [];
    while($a = mysqli_fetch_array($conecta)){
        $animal[] =[
            "id" => $a ['id'],
            "nome" => $a ['nome'],
            "iddono"  => $a ['iddono'],
            "idraca" => $a['idraca'],
            "nome_raca" => $a["nome_raca"],
            "nome_dono" => $a["nome_dono"]
        ];
    }
    echo json_encode($animal);
?>