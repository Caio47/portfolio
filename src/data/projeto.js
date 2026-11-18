export const projetos = [
    {
        titulo: "Controle Financeiro Pessoal",
        status: "Em desenvolvimento",
        descricao: "Aplicação em Java para registrar receitas e despesas e acompanhar o saldo. Construída por etapas: cada fase aplica um conceito novo do curso.",
        tecnologias: ["Java", "POO", "Console"],
        etapas: [
            "Cadastrar e listar lançamentos",
            "Categorias com herança",
            "Salvar os dados entre execuções",
        ],
        terminal: `$ java Main
=== CONTROLE FINANCEIRO ===
1 - Adicionar receita
2 - Adicionar despesa
3 - Listar lançamentos
4 - Ver saldo
0 - Sair
Escolha: 4
Saldo atual: R$ 0,00`,
        github: "https://github.com/Caio47/Controle-Financeiro",
    },
]

export const proximosProjetos = [
    {
        titulo: "API REST com Spring Boot",
        texto: "Espaço reservado para o próximo projeto, indo além do console.",
    },
    {
        titulo: "Sistema com banco de dados",
        texto: "Espaço reservado. Conectar a um banco SQL é muito pedido em vagas júnior.",
    },
]
