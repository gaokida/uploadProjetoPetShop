$(function(){
    read(); // Listar todos os animais
$.getJSON("http://localhost/pet_shop/backend/dono/listar.php", function(data){
    var html;
    data.forEach(dono => {
        html += '<option value="'+dono.id+'">'+dono.nome+'</option>';
    });
    $("#iddono").append(html);

    $.getJSON("http://localhost/pet_shop/backend/raca/listar.php", function(data){
        var html;
        data.forEach(raca => {
            html += '<option value="'+raca.id+'">'+raca.nome+'</option>';
        });
        $("#idraca").append(html);
    })
})

    $("#salvar").on("click", function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var iddono = $("#iddono").val();
        var idraca = $("#idraca").val();
        $.post("http://localhost/pet_shop/backend/animal/inserir.php",
        {"nome": nome,
        "iddono": iddono,
        "idraca": idraca}, function(data){
            read();
            $("form").trigger("reset");
        })
    })

    $("#alterar").on("click", function(event){
        event.preventDefault();
        var nome = $("#nome").val();
        var id =$("#id").val();
        var iddono = $("#iddono").val();
        var idraca = $("#idraca").val();
        $.post("http://localhost/pet_shop/backend/animal/editar.php",{nome: nome, id: id, iddono: iddono, idraca: idraca}, function(data){
            read();
            $("#alterar").hide();
            $("#salvar").show();
            $("form").trigger("reset");

        })
    })



});

function read (){
$.getJSON('http://localhost/pet_shop/backend/animal/listar.php', function (data){ //Busca no backend os animais cadastrados
    var html; //Cria uma variavel

    data.forEach(animal =>{ //Percorrer cada elemento do array data (cada animal cadastrado)
        html += "<tr>"+ //Armazenar todo o conteudo do html montado
        "<td>" + animal.id +"</td>"+
        "<td>" + animal.nome +"</td>"+
        "<td>" + animal.nome_dono + "</td>"+
        "<td>" + animal.nome_raca + "</td>"+
        "<td>" +
        "<button type ='button' class='btn btn-primary btn-sm alterar' id='alterar" +animal.id+
        "'>Alterar</button>"+ //
        "<button type='button' class = 'btn btn-danger excluir btn-sm' id='"+ animal.id +
        "'>Excluir</button></td>"
        "</tr>";
    })
    $("tbody").html(html); // Adiociona o html montado no DOM (página)

});
}

$(document).on("click",".alterar", function(event){
    event.preventDefault()
    //Funcao para mostrar o id o dono(fk) por select. OBS: mostra apenas o nome do dono
    var id = this.id.replace("alterar","");
    console.log(id);
    $.getJSON("http://localhost/pet_shop/backend/animal/listarPorId.php?id="+id,function(animal){
    $("#nome").val(animal.nome);
    $("#id").val(animal.id);
    $("#iddono").val(animal.iddono);
    $("#idraca").val(animal.idraca);
    $("salvar").hide();
    $("#alterar").show();
    })
})
$(document).on("click", ".excluir", function(event){
    event.preventDefault();
    var id = this.id
    var excluir = confirm("Deseja excluir o registro?");
    if(excluir)
    $.get("http://localhost/pet_shop/backend/animal/excluir.php?id=" + id, function(data){
        read();
    });
})

