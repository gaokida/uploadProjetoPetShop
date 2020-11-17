<?php
    require_once("../conexao.php");

    $animal_id= $_GET["id"];
    $consulta = "SELECT * FROM animal ";
    $consulta .=" WHERE id = {$animal_id}";
    $resultado = mysqli_query($conexao, $consulta);
    if(!$resultado){
        die("Erro !!");
    }

    while($a = mysqli_fetch_array($resultado)){
        echo json_encode(["id" => $a['id'],
        "nome" => $a['nome'],
        "iddono" => $a ['iddono'],
        "idraca" => $a ['idraca']]);
    }

?>