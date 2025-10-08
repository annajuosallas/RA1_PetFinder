document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = '../index.html';
    }else{
        carregaItensAbrigo();
    }
});

document.getElementById("novoAbrigo").addEventListener("click", function(){
    window.location.href = "novo_abrigo.html";
});

function validaSessao(){
    if(localStorage.getItem("sessao")){
        return true;
    }else{
        return false;
    }
}

function carregaItensAbrigo(){
    if(localStorage.getItem("listaAbrigos")){
        var lista = JSON.parse(localStorage.getItem("listaAbrigos"));
        var html = "";
        html += "<table>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluirAbrigos("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].type+"</td>";
            html += "<td>"+lista[i].adress+"</td>";
            html += "<td>"+lista[i].especies+"</td>";
            html += "<td>"+lista[i].responsavel+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("listaAbrigo").innerHTML = html;
    }else{
        var obj = {nome: "teste", type: "teste", adress: "teste", especies: "teste", responsavel: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("listaAbrigos",JSON.stringify(lista));
        window.location.reload();
    }
}

function excluirAbrigos(id){
    var listaAbrigos = JSON.parse(localStorage.getItem("listaAbrigos"));
    listaAbrigos.splice(id,1);
    localStorage.setItem("listaAbrigos", JSON.stringify(listaAbrigos));
    window.location.reload();
}
