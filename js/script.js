/* =========================================
   PESQUISA DO SITE
========================================= */

const paginas = [
    ["Início", "index.html"],
    ["História do Rococó", "historia.html"],
    ["Características", "caracteristicas.html"],
    ["Principais artistas", "artistas.html"],
    ["Rococó no Brasil", "brasil.html"],
    ["Preservação", "preservacao.html"],
    ["Galeria", "galeria.html"],
    ["Quiz", "quiz.html"],
    ["Equipe", "equipe.html"],
    ["Fontes", "fontes.html"]
];

const pesquisa = document.getElementById("pesquisa");
const resultados = document.getElementById("resultados");

if (pesquisa) {

    pesquisa.addEventListener("input", function () {

        const texto = pesquisa.value
            .toLowerCase()
            .trim();

        if (texto === "") {
            resultados.style.display = "none";
            return;
        }

        const encontrados = paginas.filter(function (pagina) {

            return pagina[0]
                .toLowerCase()
                .includes(texto);

        });

        resultados.innerHTML = "";

        encontrados.forEach(function (pagina) {

            const link = document.createElement("a");

            link.href = pagina[1];

            link.textContent = pagina[0];

            resultados.appendChild(link);

        });

        if (encontrados.length === 0) {

            resultados.innerHTML =
                "<a>Nenhuma página encontrada.</a>";

        }

        resultados.style.display = "block";

    });

    document.addEventListener("click", function (evento) {

        if (!evento.target.closest(".search-area")) {

            resultados.style.display = "none";

        }

    });

}


/* =========================================
   QUIZ
========================================= */

function corrigirQuiz() {

    const respostas = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "c"
    };

    let pontos = 0;

    for (const pergunta in respostas) {

        const resposta =
            document.querySelector(
                `input[name="${pergunta}"]:checked`
            );

        if (resposta && resposta.value === respostas[pergunta]) {

            pontos++;

        }

    }

    const resultado =
        document.getElementById("resultado");

    resultado.innerHTML = `
        <div class="alert alert-success">
            <h4>Resultado</h4>

            <p>
                Você acertou
                <strong>${pontos} de 4</strong>
                perguntas!
            </p>

            ${
                pontos === 4
                ? "Excelente! Você domina o assunto!"
                : "Que tal revisar as páginas e tentar novamente?"
            }

        </div>
    `;

}