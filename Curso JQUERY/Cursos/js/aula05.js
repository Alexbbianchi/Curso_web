$(function(){
    //Evento de erro
    $("#img").off(function() {
        var imagem = $(this).attr("src");
        alert("Imagem Indisponivel");
    });
});