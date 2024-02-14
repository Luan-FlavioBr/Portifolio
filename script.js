const projetos = [{
    "titulo": "Calculadora Estatistica",
    "texto": "Programa feito em Python, para calculo de Pareto, Histograma, Cálculo Binomial com CRUD.",
    "imagem": "./src/assets/projects-images/ProjetoEST.png",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{
    "titulo": "Sistema de PetShop",
    "texto": "Programa feito em Java, para cadastro de pacientes em PetShop, com CRUD",
    "imagem": "./src/assets/projects-images/SistemaPet.gif",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{
    "titulo": "Conversor de Medidas",
    "texto": "Programa feito em Java, para conversão de moedas, massas e temperatura.",
    "imagem": "./src/assets/projects-images/Conversor.gif",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{
    "titulo": "Codificador/Decodificador",
    "texto": "Programa feito em HTML, CSS e JS, para codificar/decodificar textos, para o desafio alura.",
    "imagem": "./src/assets/projects-images/Codificador.gif",
    "alternativo": "Teste 1",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{   "titulo": "Calculadora de Sistemas",
    "texto": "Programa feito em Python, para calcular sistemas 2x2 e 3x3, podendo fazer passa a passo.",
    "imagem": "./src/assets/projects-images/SistemasCalc.gif",
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