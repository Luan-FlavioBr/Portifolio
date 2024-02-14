const projetos = [{
    "titulo": "Calculadora Estatistica",
    "texto": "Programa feito em Python, para calculo de Pareto, Histograma, Cálculo Binomial com CRUD.",
    "imagem": "./src/assets/images/image.png",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{
    "titulo": "Calculadora Estatistica",
    "texto": "Programa feito em Python, para calculo de Pareto, Histograma, Cálculo Binomial com CRUD.",
    "imagem": "./src/assets/images/image.png",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{
    "titulo": "Calculadora Estatistica",
    "texto": "Programa feito em Python, para calculo de Pareto, Histograma, Cálculo Binomial com CRUD.",
    "imagem": "./src/assets/images/image.png",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{
    "titulo": "Calculadora Estatistica",
    "texto": "Programa feito em Python, para calculo de Pareto, Histograma, Cálculo Binomial com CRUD.",
    "imagem": "./src/assets/images/image.png",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
}];

const cardProjetos = document.querySelector('#projetos');

projetos.forEach(projeto => {
    cardProjetos.innerHTML += `
        <article class="project">
                <img src="${projeto.imagem}" alt="${projeto.alternativo}">
                <div class="projects-info">
                    <h3 class="projects-title">${projeto.titulo}</h3>
                    <p class="projects-subtitle">${projeto.texto}</p>
                </div>
                <a href="${projeto.href}" target="_blank" class="project-seemore">
                    <i class="fa-brands fa-github"></i>
                    <p>Ver mais</p>
                </a>
        </article>`
});