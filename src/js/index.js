/*O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande */
if (window.innerWidth < 450) {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
//OBJETIVO1
//Passo1
const agentes = document.querySelectorAll(".agente")
//Passo2
agentes.forEach((agente) => {
    agente.addEventListener("mouseenter", () => {
        //Passp3
        const agenteSelecionado = document.querySelector(".selecionado");
        agente.classList.add("selecionado")

        agenteSelecionado.classList.remove("selecionado");



        //OBJETIVO2
        //Passo1
        const imagemAgenteGrande = document.querySelector(".agente-grande");
        //Passo2
        const idAgente = agente.attributes.id.value;
        imagemAgenteGrande.src = `./src/imagens/card-${idAgente}.png`;
        //Passo3
        const nomeAgente = document.getElementById("nome-agente");
        nomeAgente.innerText = agente.getAttribute("data-name");
        //Passo4
        const descricaoAgente = document.getElementById("descricao-agente");
        descricaoAgente.innerText = agente.getAttribute("data-description");

    })
})