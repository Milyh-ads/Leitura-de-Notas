/* FUNÇÃO = pedaço de código que só executa quando eu chamo
Variável = um pedaço da memória do computador que eu guardo o que eu quiser

console.log() = mostra algo na tela

query.Selector = seleciona um elemento do HTML*/


// 1. Variáveis globais
let pedido = 'Olhe a foto deste comprovante e responda em UMA linha, sem escrever mais nada, com 2 pedaços separados por |. Primeiro pedaço: o emoji da categoria, o nome do estabelecimento dentro de <strong>, e depois cada item comprado com seu valor, um por linha usando <br>. Segundo pedaço: o total pago, só o número, com ponto e sempre com duas casas decimais. As categorias são: 🛒 Mercado, 🚗 Transporte, 🍔 Comida, 💊 Saúde, 🎉 Lazer, 🏠 Casa, 💸 Outros. Exemplo de resposta: 🍔 <strong>Padaria Pão Quente</strong><br>Pão — R$ 5,00<br>Leite — R$ 4,50|9.50';
let total = 0



async function lerFoto() {
    let foto = document.querySelector(".foto").files[0];
    let resposta = await puter.ai.chat(pedido, foto);
    let texto = resposta.message.content;
    let partes = texto.split("|")
    console.log(partes)

    document.querySelector(".lista").innerHTML += `
    <div class="comprovante">

        <div class="itens">${partes[0]}</div>
        <div class="total-nota">Total da nota: R$ ${partes[1]}</div>
    </div>    
  `

    total += Number(partes[1])
    document.querySelector(".total-gasto").innerHTML = "R$" + total.toFixed(2)

    document.querySelector("#btn-limpar").addEventListener("click", () => {
    // 1. Zera a variável do total acumulado
    total = 0;

    // 2. Limpa a lista de comprovantes na tela
    document.querySelector(".lista").innerHTML = "";

    // 3. Reseta a exibição do total para R$0
    document.querySelector(".total-gasto").innerHTML = "R$ 0,00";

    // 4. Reseta a seleção do input de arquivo
    const inputFoto = document.querySelector(".foto");
    if (inputFoto) {
        inputFoto.value = "";
    }
});

}
