document.getElementById("enviarPet").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

function armazenar(){
    var listaPet = JSON.parse(localStorage.getItem("listaPets"));
    var obj = {nome: "", email:"", nasc: ""};
    obj.nome = document.getElementById("nome").value;
    obj.especie = document.getElementById("especie").value;
    obj.idade = document.getElementById("idade").value;
    obj.raca = document.getElementById("raca").value;
    obj.porte = document.getElementById("porte").value;
    obj.caracteristicas = document.getElementById("caracteristicas").value;
    obj.sexo = document.getElementById("sexo").value;
    obj.pelagem = document.getElementById("pelagem").value;
    obj.cor = document.getElementById("cor").value;
    listaPet.push(obj);
    localStorage.setItem("listaPets",JSON.stringify(listaPet));    
}