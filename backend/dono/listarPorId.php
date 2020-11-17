<?php
    include_once('../conexao.php');
    $dono_id = $_GET['id'];
    $consulta = "SELECT * FROM dono ";
    $consulta .= "WHERE id = {$dono_id}";
    $resul =  mysqli_query($conexao,$consulta);

    if(!$resul){
        die("ERRO");

    }
    while($a = mysqli_fetch_array($resul)){
        echo json_encode(["id" => $a['id'],
                        "nome" => $a['nome'],
                        "telefone" => $a['telefone']]);
    }
?>
