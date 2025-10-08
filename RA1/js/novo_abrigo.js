document.getElementById("enviarAbrigo").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

function armazenar(){
    var listaAbrigo = JSON.parse(localStorage.getItem("listaAbrigos"));
    var obj = {nome: "", type:"", adress: "", especies: "", responsavel: ""};
    obj.nome = document.getElementById("nome").value;
    obj.type = document.getElementById("type").value;
    obj.adress = document.getElementById("adress").value;
    obj.especies = document.getElementById("especies").value;
    obj.responsavel = document.getElementById("responsavel").value;
    listaAbrigo.push(obj);
    localStorage.setItem("listaAbrigos",JSON.stringify(listaAbrigo));
}