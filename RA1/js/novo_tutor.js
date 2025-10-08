document.querySelector("#enviarTutor").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

function armazenar(){
    var listaTutores = JSON.parse(localStorage.getItem("listaTutores"));
    var obj = {nome: "", address:"", phone: "", email: "", renda: ""};
    obj.nome = document.getElementById("nome").value;
    obj.address = document.getElementById("address").value;
    obj.phone = document.getElementById("phone").value;
    obj.email = document.getElementById("email").value;
    obj.renda = document.getElementById("renda").value;
    listaTutores.push(obj);
    localStorage.setItem("listaTutores",JSON.stringify(listaTutores));
}