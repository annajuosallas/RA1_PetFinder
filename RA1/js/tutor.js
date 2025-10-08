document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = '../index.html';
    }else{
        carregaItensTutor();
    }
});

document.getElementById("novoTutor").addEventListener("click", function(){
    window.location.href = "novo_tutor.html";
});

function validaSessao(){
    if(localStorage.getItem("sessao")){
        return true;
    }else{
        return false;
    }
}

function carregaItensTutor(){
    if(localStorage.getItem("listaTutores")){
        var lista = JSON.parse(localStorage.getItem("listaTutores"));
        var html = "";
        html += "<table>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluirTutores("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].adress+"</td>";
            html += "<td>"+lista[i].phone+"</td>";
            html += "<td>"+lista[i].email+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("listaTutor").innerHTML = html;
    }else{
        var obj = {nome: "teste", adress: "teste", phone: "teste", email: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("listaTutores",JSON.stringify(lista));
        window.location.reload();
    }
}

function excluirTutores(id){
    var listaTutores = JSON.parse(localStorage.getItem("listaTutores"));
    listaTutores.splice(id,1);
    localStorage.setItem("listaTutores", JSON.stringify(listaTutores));
    window.location.reload();
}