document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = '../index.html';
    }else{
        carregaItensPet();
    }    
});

document.getElementById("novoPet").addEventListener("click", function(){
    window.location.href = "novo_pet.html";
});

function validaSessao(){
    if(localStorage.getItem("sessao")){
        return true;
    }else{
        return false;
    }
}

function carregaItensPet(){
    if(localStorage.getItem("listaPets")){
        var lista = JSON.parse(localStorage.getItem("listaPets"));
        var html = "";
        html += "<table>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluirPets("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].especie+"</td>";
            html += "<td>"+lista[i].idade+"</td>";
            html += "<td>"+lista[i].raca+"</td>";
            html += "<td>"+lista[i].porte+"</td>";
            html += "<td>"+lista[i].caracteristicas+"</td>";
            html += "<td>"+lista[i].sexo+"</td>";
            html += "<td>"+lista[i].pelagem+"</td>";
            html += "<td>"+lista[i].cor+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("listaPet").innerHTML = html;  
    }else{
        var obj = {nome: "teste", especie: "teste", idade: "teste", raca: "teste", porte: "teste", caracteristicas: "teste", sexo: "teste", pelagem: "teste", cor: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("listaPets",JSON.stringify(lista));
        window.location.reload();
    }
}

function excluirPets(id){
    var listaPets = JSON.parse(localStorage.getItem("listaPets"));
    listaPets.splice(id,1);
    localStorage.setItem("listaPets",JSON.stringify(listaPets));
    window.location.reload();
}


