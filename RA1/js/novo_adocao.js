document.getElementById("enviarAdocao").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

function armazenar(){
    var listaAdocao = JSON.parse(localStorage.getItem("listaAdocoes"));
    var obj = {nome: "", age:"", cpf: "", phone: "", adress: "", email: ""};
    obj.nome = document.getElementById("nome").value;
    obj.age = document.getElementById("age").value;
    obj.cpf = document.getElementById("cpf").value;
    obj.phone = document.getElementById("phone").value;
    obj.adress = document.getElementById("adress").value;
    obj.email = document.getElementById("email").value;
    listaAdocao.push(obj);
    localStorage.setItem("listaAdocoes",JSON.stringify(listaAdocao));
}