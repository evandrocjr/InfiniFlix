const submit = document.querySelector('.form-submit')

// funcao que ira retornar os dados da API

async function fetchMovies(url) {
    // realizando a requisicao
    const res = await fetch(url)
    // converstendo a respota para json
    const data = await res.json()
    // retornando os dados da requisicao
    return data
}

// funcao que sera executada quando o user clicar em submit

async function buscarFilmes(e) {
    e.preventDefault();
    const filme = document.querySelector('.form-input').value
    const url = `https://www.omdbapi.com/?s=${filme}&apikey=e341acff`
    console.log(url)
    const data = await fetchMovies(url)

    
    const ul = document.querySelector("#movies")
    let content = ""
    for (let i = 0; i < data.Search.length; i++) {
        content += `<li class="app-movies-all-card">`;
        content += `<figure class="app-movies-all-figure">`;
        content += `<img class="app-movies-all-thumb" src="${data.Search[i].Poster}" />`;
        content += `</figure>`;
        content += `<legend class="app-movies-all-legend">`;
        content += `<span class="app-movies-all-year">${data.Search[i].Year}</span>`;
        content += `<h2 class="app-movies-all-title">${data.Search[i].Title}</h2>`;
        content += `</legend>`;
        content += `</li>`
    }
    ul.innerHTML = content
}

submit.addEventListener("click", buscarFilmes)







