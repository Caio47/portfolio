import "./Hero.css"

const codigo = `public class Desenvolvedor {
    String foco = "Java + POO";
    String objetivo = "Dev Java Júnior";
    String cidade = "Fortaleza";

    void aprender() {
        estudarTodoDia();
        construirProjetos();
    }
}`

export function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="hero-texto">
                <span className="rotulo">// disponível para vagas júnior</span>
                <h1>Olá, eu sou Caio Gabriel. Desenvolvedor Java em formação.</h1>
                <p>Estudo Java e Programação Orientada a Objetos construindo projetos reais, passo a passo.</p>
                <div className="hero-botoes">
                    <a href="#projetos" className="botao">Ver projetos</a>
                    <a href="https://github.com/Caio47" className="botao botao-sec">GitHub</a>
                </div>
            </div>

            <pre className="hero-codigo">
                <code>{codigo}</code>
            </pre>
        </section>
    )
}
