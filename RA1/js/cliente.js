document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = '../index.html';
    }else{
        carregaItensCliente();
    }    
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "novo_cliente.html";
});

function validaSessao(){
    if(localStorage.getItem("sessao")){
        return true;
    }else{
        return false;
    }
}

function carregaItensCliente(){
    if(localStorage.getItem("listaClientes")){
        var lista = JSON.parse(localStorage.getItem("listaClientes"));
        var html = "";
        html += "<table>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluirClientes("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].email+"</td>";
            html += "<td>"+lista[i].phone+"</td>";
            html += "<td>"+lista[i].cpf+"</td>";
            html += "<td>"+lista[i].adress+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("listaCliente").innerHTML = html;  
    }else{
        var obj = {nome: "teste", email: "teste", phone: "teste", cpf: "teste", adress: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("listaClientes",JSON.stringify(lista));
        window.location.reload();
    }
}

function excluirClientes(id){
    var listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    listaClientes.splice(id,1);
    localStorage.setItem("listaClientes", JSON.stringify(listaClientes));
    window.location.reload();
}


