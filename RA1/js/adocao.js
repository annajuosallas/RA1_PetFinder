document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = '../index.html';
    }else{
        carregaItensAdocao();
    }    
});

document.getElementById("novoAdocao").addEventListener("click", function(){
    window.location.href = "novo_adocao.html";
});

function validaSessao(){
    if(localStorage.getItem("sessao")){
        return true;
    }else{
        return false;
    }
}

function carregaItensAdocao(){
    if(localStorage.getItem("listaAdocoes")){
        var lista = JSON.parse(localStorage.getItem("listaAdocoes"));
        var html = "";
        html += "<table>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluirAdocoes("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].age+"</td>";
            html += "<td>"+lista[i].cpf+"</td>";
            html += "<td>"+lista[i].phone+"</td>";
            html += "<td>"+lista[i].adress+"</td>";
            html += "<td>"+lista[i].email+"</td>";
            html += "<td>"+lista[i].renda+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("listaAdocao").innerHTML = html;  
    }else{
        var obj = {nome: "teste", age: "teste", cpf: "teste", phone: "teste", adress: "teste", email: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("listaAdocoes",JSON.stringify(lista));
        window.location.reload();
    }
}

function excluirAdocoes(id){
    var listaAdocoes = JSON.parse(localStorage.getItem("listaAdocoes"));
    listaAdocoes.splice(id,1);
    localStorage.setItem("listaAdocoes",JSON.stringify(listaAdocoes));
    window.location.reload();
}

