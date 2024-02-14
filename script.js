const projetos = [{
    "titulo": "Calculadora Estatistica",
    "texto": "Programa feito em Python, para calculo de Pareto, Histograma, Cálculo Binomial com CRUD.",
    "imagem": "./src/assets/projects-images/ProjetoEST.png",
    "alternativo": "PNG da tela inicial da calculadora estatística.",
    "href" : "https://github.com/Luan-FlavioBr/Projeto-EST"
},
{
    "titulo": "Sistema de PetShop",
    "texto": "Programa feito em Java, para cadastro de pacientes em PetShop, com CRUD",
    "imagem": "./src/assets/projects-images/SistemaPet.gif",
    "alternativo": "GIF do sistema funcionando.",
    "href" : "https://github.com/Luan-FlavioBr/SistemaPetShopFATEC"
},
{
    "titulo": "Conversor de Medidas",
    "texto": "Programa feito em Java, para conversão de moedas, massas e temperatura.",
    "imagem": "./src/assets/projects-images/Conversor.gif",
    "alternativo": "GIF do conversor funcionando.",
    "href" : "https://github.com/Luan-FlavioBr/Conversor-alura-challenge"
},
{
    "titulo": "Codificador/Decodificador",
    "texto": "Programa feito em HTML, CSS e JS, para codificar/decodificar textos, para o desafio alura.",
    "imagem": "./src/assets/projects-images/Codificador.gif",
    "alternativo": "GIF do Codificador/Decodificador funcionando.",
    "href" : "https://github.com/Luan-FlavioBr/Challenge-Oracle-ONE"
},
{   "titulo": "Calculadora de Sistemas",
    "texto": "Programa feito em Python, para calcular sistemas 2x2 e 3x3, podendo fazer passa a passo.",
    "imagem": "./src/assets/projects-images/SistemasCalc.gif",
    "alternativo": "GIF da calculadora funcionando no Terminal do VSCode.",
    "href" : "https://github.com/Luan-FlavioBr/Calculadora-de-Sistemas"
},
{   "titulo": "Parallax Site",
    "texto": "Site com estilo Parallax, feito em HTML e CSS.",
    "imagem": "./src/assets/projects-images/Parallax.gif",
    "alternativo": "GIF do site Parallax funcionando.",
    "href" : "https://github.com/Luan-FlavioBr/Parallax"
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


console.log(screen.width);