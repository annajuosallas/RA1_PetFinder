document.getElementById("enviar").addEventListener("click", function(){
    armazenar();
    window.location.href = "index.html";
});

function armazenar(){
    var listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    var obj = {nome: "", email:"", phone: "", cpf: "", adress: ""};
    obj.nome = document.getElementById("nome").value;
    obj.email = document.getElementById("email").value;
    obj.phone = document.getElementById("phone").value;
    obj.cpf = document.getElementById("cpf").value;
    obj.adress = document.getElementById("adress").value;
    listaClientes.push(obj);
    localStorage.setItem("listaClientes",JSON.stringify(listaClientes));    
}