import "./Trilha.css"

// Cada item vira um card. Troque os textos pelos seus.
const etapas = [
    {
        rotulo: "Cursando",
        titulo: "Ciências da Computação",
        texto: "Estácio. Comecei em 2023 e estou no último semestre.",
        atual: false,
    },
    {
        rotulo: "Concluído",
        titulo: "Full Stack — Digital College",
        texto: "Onde aprendi React e Node.js.",
        atual: false,
    },
    {
        rotulo: "Agora",
        titulo: "Java Completo — POO + Projetos",
        texto: "Curso na Udemy, prof. Nelio Alves. Em andamento: herança e polimorfismo.",
        atual: true,
    },
    {
        rotulo: "Próximo",
        titulo: "Spring Boot + vaga júnior",
        texto: "O framework mais pedido nas vagas Java do mercado.",
        atual: false,
    },
]

export function Trilha() {
    return (
        <section id="trilha" className="trilha">
            <div className="conteudo">
                <span className="rotulo">04 · trilha</span>
                <h2>Formação e próximos passos</h2>

                <ol className="trilha-cards">
                    {etapas.map((e) => (
                        <li key={e.titulo} className="trilha-card">
                            <span className={e.atual ? "trilha-rotulo atual" : "trilha-rotulo"}>
                                {e.rotulo}
                            </span>
                            <h3>{e.titulo}</h3>
                            <p>{e.texto}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
