    function MostrarBtn(){
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