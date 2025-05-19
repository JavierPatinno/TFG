import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.todo}>

            <div className={styles.individual}>
                <section>
                    <h1>Herramienta de Apoyo al Diagnóstico Médico con Modelos de IA</h1>
                    <h3>Esta plataforma está diseñada como complemento clínico para profesionales sanitarios. Integra modelos de aprendizaje automático entrenados con datos reales para facilitar el análisis de imágenes médicas y variables clínicas en escenarios comunes de diagnóstico.</h3>
                    <Link to='modelos'>
                        <button>Acceder a los modelos</button>
                    </Link>
                </section>
            </div>

            <div className={styles.individual}>
                <section>
                    <h1>Funcionamiento de la Plataforma</h1>
                    <ul>
                        <li><strong>Carga de datos:</strong> El usuario proporciona imágenes médicas (radiografías o muestras histológicas) o registros clínicos estructurados.</li>
                        <li><strong>Procesamiento automatizado:</strong> La información es analizada por modelos previamente entrenados con conjuntos de datos médicos validados.</li>
                        <li><strong>Salida inmediata:</strong> Se genera una predicción que puede ser utilizada como referencia adicional durante la evaluación clínica.</li>
                    </ul>
                </section>
            </div>

            <div className={styles.individual}>
                <section>
                    <h1>Aplicación Clínica</h1>
                    <ul>
                        <li><strong>Evaluación pulmonar:</strong> Modelos CNN aplicados a radiografías para la identificación de afecciones como neumonía o EPOC.</li>
                        <li><strong>Detección de cáncer de mama:</strong> Clasificación de parches histológicos en imágenes de alta resolución (IDC positivo/negativo).</li>
                        <li><strong>Análisis de riesgo cardiovascular:</strong> Estimación del riesgo mediante modelos tabulares entrenados con variables clínicas y sociodemográficas.</li>
                    </ul>
                </section>
            </div>

            <div className={styles.individual}>
                <section>
                    <h1>Principios de Seguridad y Uso Ético</h1>
                    <h3>La plataforma se ha desarrollado siguiendo criterios de protección de datos y respeto a la confidencialidad clínica.</h3>
                    <ul>
                        <li><strong>Datos anonimizados:</strong> Todos los modelos han sido entrenados con información desidentificada.</li>
                        <li><strong>Sin explotación comercial:</strong> Esta herramienta no tiene fines de lucro y no comparte datos con terceros.</li>
                        <li><strong>Control del usuario:</strong> El personal autorizado puede solicitar la eliminación de cualquier dato en cualquier momento.</li>
                        <li><strong>Finalidad académica y asistencial:</strong> El sistema está orientado a apoyar la toma de decisiones médicas, no a reemplazar el juicio clínico.</li>
                    </ul>
                </section>
            </div>

        </div>
    )
}

export default Home
