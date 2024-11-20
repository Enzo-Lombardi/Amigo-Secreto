let listaNomes = [];

let nomesIncluidos = document.getElementById("lista-amigos");
let paragrafoSorteio = document.getElementById("lista-sorteio");

let nome = document.getElementById("nome-amigo");

function adicionar() {
    if (nome.value == ``) {
        alert("Adicione um nome válido para participar do sorteio!")
    } else {
        if (listaNomes.includes(nome.value)) {
            alert("Infelizmente esse nome já está incluido no sorteio, porvafor adicione o sobrenome da pessoa");
        } else {
            listaNomes.push(nome.value);

            //nomesIncluidos.textContent = listaNomes.join(", "); Aqui está colocando os nomes separados por virgula, já no remover amigos está passando em formato de paragrafo;
        
        }
    }
    nome.value = "";

    removerAmigos();
    apagarParagrafo();
}

function sortear() {
    let emabaralhado = listaNomes.sort((a, b) => Math.random() - 0.5);
    let emabaralhadoReal = emabaralhado.sort((a, b) => Math.random() - 0.5);
    let tamanho = listaNomes.length;

    apagarParagrafo();

    if (listaNomes.length < 4) {
        alert("Adicione pelo menos 4 pessoas para o sorteio ocorrer da melhor forma possivel!");
    } else {
        for (let i = 0; i < tamanho; i++) {
            if (i == tamanho - 1){
                paragrafoSorteio.innerHTML = paragrafoSorteio.innerHTML + emabaralhadoReal[i] + "  -->  " + emabaralhadoReal[0] + "<br>";
            } else {
                paragrafoSorteio.innerHTML = paragrafoSorteio.innerHTML + emabaralhadoReal[i] + "  -->  " + emabaralhadoReal[i + 1] + "<br>";
            }
        }
    }
}

function reiniciar() {
    listaNomes = [];
    nomesIncluidos.textContent = "";
    paragrafoSorteio.textContent = "";
}

function apagarParagrafo() {
    paragrafoSorteio.innerHTML = "";
}

function removerAmigos() {
    nomesIncluidos.textContent = "";

    for(let i = 0; i < listaNomes.length; i++  ) {
        let paragrafo = document.createElement("p");
        paragrafo.innerHTML = listaNomes[i];

        paragrafo.addEventListener('click', function() {
            listaNomes.splice(i, 1);
            paragrafo.remove(); //Este paragrafo.remove ele está removendo da interface da pagina o paragrafo especcifico, no caso ele vai variar qual ele esclui pois está excluindo o paragrafo que recebe o click.
            apagarParagrafo();
        });

        nomesIncluidos.appendChild(paragrafo);
    }
}