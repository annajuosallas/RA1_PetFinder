const usuarios = [
    { email: 'tutor', senha: 'tutor' },
    { email: 'usuario', senha: 'usuario' },
    { email: 'abrigo', senha: 'abrigo' },
];

let botao = document.getElementById('entrar'); 

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('email').value.trim();
    let pegaSenha = document.getElementById('senha').value.trim();
    let validaLogin = false
    

    for(let i in usuarios){

        if (pegaUsuario == usuarios[i].email && 
        pegaSenha == usuarios[i].senha){
                validaLogin = true
                localStorage.setItem("sessao", JSON.stringify({ email: pegaUsuario, senha: pegaSenha }));
                break;
        }

    }
    
    if(validaLogin == true){
        location.href = "home/index.html";
    }else {
        mensagem.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Usuário ou senha incorretos. <br> Tente novamente.
            </div>`;
    }
}

);

