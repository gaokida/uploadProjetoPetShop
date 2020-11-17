$(function (){
    read();


    $("#salvar").on("click",function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        $.post("http://localhost/pet_shop/backend/raca/inserir.php", 
        {"nome": nome},function(data){
            read();
            $("form").trigger("reset");
        })
    })

    $("#alterar").on("click", function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var id = $("#id").val();
        $.post("http://localhost/pet_shop/backend/raca/editar.php",{nome:nome, id:id}, function(data){
            read();
            $("#alterar").hide();
            $("#salvar").show();
            $("form").trigger("reset");
        })
    })
})

function read(){
    $.getJSON("http://localhost/pet_shop/backend/raca/listar.php", function (data){
        $("tbody").html("");
        data.forEach(raca =>{
            var html ="<tr>" +
            "<td>" + raca.id + "</td>" +
            "<td>" + raca.nome + "</td>" +
            "<td>" +
            "<button type = 'button' class='btn btn-primary btn-sm alterar' id='alterar"+raca.id+
            "'>Alterar</button>"+
            "<button type='button' class ='btn btn-danger excluir btn-sm' id='"+raca.id +
            "'>Excluir</button></td>"
        "</tr>";
        $("tbody").append(html);
        });
    })
}
$(document).on("click",".alterar", function(event){
    event.preventDefault();
    var id = this.id.replace("alterar","");
    console.log(this.id)
    $.getJSON("http://localhost/pet_shop/backend/raca/listarPorId.php?id="+id,function(raca){
        $("#nome").val(raca.nome);
        $("#id").val(raca.id);
        $("#salvar").hide();
        $("#alterar").show();
        
    });
})

$(document).on("click", ".excluir", function(event){
    event.preventDefault();
    var id = this.id
    var excluir = confirm("Deseja excluir o registro?");
    if(excluir)
    $.get("http://localhost/pet_shop/backend/raca/excluir.php?id=" + id, function(data){
        read();
    })
})