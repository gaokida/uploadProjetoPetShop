$(function(){
    read();

    $("#salvar").on("click",function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var telefone = $("#telefone").val();
        $.post("http://localhost/pet_shop/backend/dono/inserir.php", 
        {"nome": nome, "telefone" : telefone},function(data){
            read();
            $("form").trigger("reset");
        })
    })

    $("#alterar").on("click", function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var id = $("#id").val();
        var telefone = $("#telefone").val();
        $.post("http://localhost/pet_shop/backend/dono/editar.php",{nome:nome, id:id, telefone:telefone},function(data){
            read();
            $("#alterar").hide();
            $("#salvar").show();
            $("form").trigger("reset");
        })
    })

})
function read(){
    $.getJSON("http://localhost/pet_shop/backend/dono/listar.php", function(data){
        $("tbody").html("");
        data.forEach(dono =>{
            var html ="<tr>" +
            "<td>" + dono.id + "</td>" +
            "<td>" + dono.nome + "</td>" +
            "<td>"+ dono.telefone+"</td>"+
            "<td>" +
            "<button type = 'button' class='btn btn-primary btn-sm alterar' id='alterar"+dono.id+
            "'>Alterar</button>"+
            "<button type ='button' class = 'btn btn-danger excluir btn-sm' id='"+dono.id+
            "'>Excluir</button></td>"
            "</tr>";
            $("tbody").append(html);
        });
    })
}

$(document).on("click",".alterar", function(event){
    event.preventDefault();
    var id = this.id.replace("alterar","");
    $.getJSON("http://localhost/pet_shop/backend/dono/listarPorId.php?id="+id, function(dono){
        $("#nome").val(dono.nome);
        $("#id").val(dono.id);
        $("#telefone").val(dono.telefone);
        $("#salvar").hide();
        $("#alterar").show();
    });
})

$(document).on("click",".excluir", function(event){
    event.preventDefault();
    var id = this.id
    var excluir = confirm("Deseja excluir registro?");
    if(excluir)
        $.get("http://localhost/pet_shop/backend/dono/excluir.php?id="+id, function(data){
            read();
        })
})