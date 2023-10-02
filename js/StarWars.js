// Seleciona elementos HTML e atribui a variáveis
let container = document.querySelector(".container");

// Função assíncrona para obter informações de todos os personagens
async function getPersonagens() {
    try {
        // Faz uma requisição à API de personagens do Star Wars
        let response = await fetch('https://swapi.dev/api/people/');
        
        // Converte a resposta em formato JSON
        let data = await response.json();

        // Chama a função para adicionar informações de cada personagem ao DOM
        data.results.forEach(personagem => {
            addHTML(personagem);
        });
    } catch (error) {
        console.error("Erro ao buscar informações dos personagens:", error);
    }
}

// Função para adicionar informações do personagem ao DOM
function addHTML(personagem) {
    let div = document.createElement("div");
    let nome = document.createElement("h2");
    let height = document.createElement("p");
    let mass = document.createElement("p");
    let hair_color = document.createElement("p");
    let skin_color = document.createElement("p");
    let eye_color = document.createElement("p");
    let birth_year = document.createElement("p");
    let gender = document.createElement("p");

    // Define o conteúdo dos elementos com base nas informações do personagem
    nome.innerHTML = "Nome: " + personagem.name;
    height.innerHTML = "Altura: " + personagem.height;
    mass.innerHTML = "Massa: " + personagem.mass;
    hair_color.innerHTML = "Cor do cabelo: " + personagem.hair_color;
    skin_color.innerHTML = "Cor da pele: " + personagem.skin_color;
    eye_color.innerHTML = "Cor dos olhos: " + personagem.eye_color;
    birth_year.innerHTML = "Ano de nascimento: " + personagem.birth_year;
    gender.innerHTML = "Gênero: " + personagem.gender;

    // Adiciona os elementos ao div criado
    div.appendChild(nome);
    div.appendChild(height);
    div.appendChild(mass);
    div.appendChild(hair_color);
    div.appendChild(skin_color);
    div.appendChild(eye_color);
    div.appendChild(birth_year);
    div.appendChild(gender);

    // Adiciona o div ao contêiner principal
    container.appendChild(div);
}

// Chama a função para obter informações de todos os personagens
getPersonagens();