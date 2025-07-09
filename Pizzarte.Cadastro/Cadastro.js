function MostrarSenhaBtn(){
        let senha = document.querySelector("#senha");
        let mostrarSenha = document.querySelector("#senhaBtn");

    if(senha.type === "password"){
        senha.setAttribute("type","text");
        mostrarSenha.classList.remove("fa-lock");
        mostrarSenha.classList.add("fa-unlock")
    }
    else{
        senha.setAttribute("type","password");
        mostrarSenha.classList.remove("fa-unlock");
        mostrarSenha.classList.add("fa-lock")
    }
}

function MostrarConfirmarBtn(){
        let senha = document.querySelector("#Confirmar-Senha");
        let mostrarSenha = document.querySelector("#confirmarBtn");

    if(senha.type === "password"){
        senha.setAttribute("type","text");
        mostrarSenha.classList.remove("fa-lock");
        mostrarSenha.classList.add("fa-unlock")
    }
    else{
        senha.setAttribute("type","password");
        mostrarSenha.classList.remove("fa-unlock");
        mostrarSenha.classList.add("fa-lock")
    }
}