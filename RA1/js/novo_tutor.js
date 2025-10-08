document.getElementById("enviarTutor").addEventListener("click", function(){
    armazenar();
    window.location.href = "../home/index.html";
});

function armazenar(){
    var listaTutores = JSON.parse(localStorage.getItem("listaTutores"));
    var obj = {nome: "", adress:"", phone: "", email: "", renda: ""};
    obj.nome = document.getElementById("nome").value;
    obj.email = document.getElementById("email").value;
    obj.phone = document.getElementById("phone").value;
    obj.adress = document.getElementById("adress").value;
    obj.renda = document.getElementById("renda").value;
    listaTutores.push(obj);
    localStorage.setItem("listaTutores",JSON.stringify(listaTutores));
}