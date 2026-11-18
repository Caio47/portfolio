import "./Habilidades.css"
export function Habilidades() {
    return (
        <section id="habilidades" className="habilidades">
            <div className="conteudo">
                <span className="rotulo">02 · habilidades</span>

                <h2>O que eu já sei e o que estou aprendendo</h2>

                <div className="habilidades-cards">
                    <div className="card">
                        <h3>Linguagem</h3>
                        <ul>
                            <li className="tag">Java</li>
                            <li className="tag">JavaScript</li>
                            <li className="tag">SQL</li>
                            
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Orientação a Objetos</h3>
                        <ul>
                            <li className="tag">Classes e Objetos</li>
                            <li className="tag">Encapsulamento</li>
                            <li className="tag estudando">Herança</li>
                            <li className="tag estudando">Polimorfismo</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Ferramentas</h3>
                        <ul>
                            <li className="tag">Git</li>
                            <li className="tag">React</li>
                            <li className="tag estudando">Spring Boot</li>
                            <li className="tag">PostgreSQL</li>

                        </ul>
                    </div>
                </div>
                                            </div>

        </section>
    )
}