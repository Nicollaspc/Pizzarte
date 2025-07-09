    const botaoComprar = document.querySelectorAll(".botao-comprar");

    botaoComprar.forEach((botao) => {
        botao.addEventListener("click", () => {
            Swal.fire({
            title: "Perfeito!",
            text: "Voce adicionou o seu pedido ao CARRINHO!",
            icon: "success",
            timer: 2000
            });
        })
    })