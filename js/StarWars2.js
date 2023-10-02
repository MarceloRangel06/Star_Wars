// Seleciona elementos HTML e atribui a variáveis
let conter_planetas = document.querySelector(".container2");

// Função assíncrona para obter informações de todos os personagens
async function getPlanetas() {
    try {
        // Faz uma requisição à API de personagens do Star Wars
        let response = await fetch('https://swapi.dev/api/planets/');
        
        // Converte a resposta em formato JSON
        let data = await response.json();

        // Chama a função para adicionar informações de cada personagem ao DOM
        data.results.forEach(planetas => {
            addHTML(planetas);
        });
    } catch (error) {
        console.error("Erro ao buscar informações dos personagens:", error);
    }
}

// Função para adicionar informações do personagem ao DOM
function addHTML(planetas) {
    let div = document.createElement("div");
    let nome = document.createElement("h2");
    let rotation_period = document.createElement("p");
    let orbital_period = document.createElement("p");
    let diameter = document.createElement("p");
    let climate = document.createElement("p");
    let gravity = document.createElement("p");
    let terrain = document.createElement("p");
    let gender = document.createElement("p");
    let surface_water = document.createElement("p");
    let population = document.createElement("p");

    // Define o conteúdo dos elementos com base nas informações do personagem
    nome.innerHTML = "Nome: " + planetas.name;
    rotation_period.innerHTML = "Periodo de rotação: " + planetas.rotation_period;
    orbital_period.innerHTML = "Periodo de Orbita: " + planetas.orbital_period;
    diameter.innerHTML = "Diamitro: " + planetas.diameter;
    climate.innerHTML = "Clima: " + planetas.climate;
    gravity.innerHTML = "Gravidade: " + planetas.gravity;
    terrain.innerHTML = "Terreno: " + planetas.terrain;
    surface_water.innerHTML = "Gênero: " + planetas.surface_water;
    population.innerHTML = "População: " + planetas.population;


    // Adiciona os elementos ao div criado
    div.appendChild(nome);
    div.appendChild(rotation_period);
    div.appendChild(orbital_period);
    div.appendChild(diameter);
    div.appendChild(climate);
    div.appendChild(gravity);
    div.appendChild(terrain);
    div.appendChild(surface_water);
    div.appendChild(population);

    // Adiciona o div ao contêiner principal
    conter_planetas.appendChild(div);
}

// Chama a função para obter informações de todos os personagens
getPlanetas();