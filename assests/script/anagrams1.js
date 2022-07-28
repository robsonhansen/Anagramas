const main = document.querySelector("main");
const button = document.getElementById("findButton");
const input = document.querySelector("#input");
const listOrdenada = alphabetPalavras(palavras);
const listOrdenadaObj = Object.assign({}, listOrdenada);
const listObj = Object.assign({}, palavras);


// usar para vereficação das strings
function alphabet(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

// função que ordena o dicionario em ordem alfabetica
function alphabetPalavras(word) {
    let listA = [];
    for (let i = 0; i < word.length; i++) {
        listA.push(alphabet(word[i]));
    }
    return listA;
}

//função para retornar palavras que são anagramas do input e que estão no dicionario
function comparar(listOrdenada, input) {
    let listA = [];
    for (key in listOrdenada) {
        if (listOrdenada[key] === alphabet(input)) {
            listA.push(key);
        }
    }
    return listA

}

// verifica se a palavra é anagrama de outra
function getAnagramsOf(dicionario, word, input) {
    let listAcess = [];
    let chaveAcess = comparar(word, input);

    for (key in dicionario) {
        if (chaveAcess.includes(key)) {
            listAcess.push(dicionario[key]);
        }

    }
    return listAcess;

}

const corner = document.querySelector("#corner");
const altCorner = document.querySelector("#altcorner");

// função para montar tamplete 
function montarTemplete(listAcess) {
    const templete = document.querySelector("#listagem");

    if (listAcess.length > 0) {
        document.querySelector("#listagem").insertAdjacentHTML("beforeend", `<li id="corner"><p id="result">${listAcess.toString().replace(/,/g, ", ")}</p></li>`);
    } else if (listAcess.length === 0) {
        alert("Não existe palavra com esse nome");
        criarLi();
    } else if (listAcess === undefined) {
        alert("Não existe palavra com esse nome");
        criarLi();
    } else if (listAcess === null) {
        alert("Não existe palavra com esse nome");
        criarLi();
    }
    console.log(listAcess);
}

// função para criar li substituta
function criarLi() {
    document.querySelector("#listagem").insertAdjacentHTML("beforeend", `<li class="remove"></li>`);

}

// funçõe para limpar a Ul
function removerTemplete() {
    document.querySelector("li").remove();

}

//função para limpar o input
function limparInput(input) {
    input.value = "";
}

// evento para o botão
button.addEventListener("click", () => {
    const textValue = input.value.trim();

    if (textValue !== "") {

        const value = input.value;
        const listAcess = getAnagramsOf(listObj, listOrdenadaObj, value);
        removerTemplete();
        montarTemplete(listAcess);

    } else if (textValue === "") {
        alert("Digite uma palavra");
        location.reload();
    }

    limparInput(input);
});

