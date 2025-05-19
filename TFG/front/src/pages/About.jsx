import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.individual}>
        <h1>Sobre esta aplicación</h1>
        <p>
          Esta aplicación web ha sido desarrollada como parte del Trabajo de Fin de Grado (TFG) de Javier Patiño Cantero, estudiante del Grado en Ciencia de Datos en la Universidad Europea de Valencia.
        </p>
        <p>
          El objetivo principal del proyecto ha sido crear una herramienta funcional que aproveche el potencial de la inteligencia artificial y el aprendizaje automático para facilitar el diagnóstico de enfermedades mediante el uso de modelos predictivos entrenados con datos clínicos reales.
        </p>
        <p>
          La aplicación está diseñada para servir como apoyo a profesionales del ámbito sanitario, pero también puede ser de gran utilidad en entornos educativos o formativos. Se ha puesto especial atención en crear una experiencia de usuario clara, sencilla y sin barreras técnicas, permitiendo que cualquier persona con conocimientos clínicos básicos pueda obtener resultados sin necesidad de saber programar.
        </p>
        <p>
          El sistema ofrece predicciones para tres patologías frecuentes: enfermedades cardiovasculares, enfermedades pulmonares y cáncer de mama. Dependiendo del caso, el modelo analiza datos estructurados (como historial clínico) o imágenes médicas. Los resultados se presentan de forma directa, permitiendo al usuario interpretar rápidamente la salida generada por el modelo.
        </p>
        <p>
          Esta herramienta no pretende sustituir el criterio médico, sino actuar como un recurso complementario que ayude a priorizar casos, apoyar decisiones clínicas o fomentar la exploración del uso de IA en medicina. En ese sentido, también puede ser útil como material didáctico para estudiantes de ciencias de la salud o ciencia de datos.
        </p>
        <p>
          La motivación detrás del proyecto surge tanto del interés personal en la tecnología aplicada a la salud, como de la necesidad de soluciones accesibles que acerquen la inteligencia artificial a los profesionales que realmente la necesitan en su día a día.
        </p>
        <p>
          Para más información, puedes consultar la memoria del TFG o contactar directamente con el autor a través de los medios proporcionados.
        </p>
      </div>
    </div>
  )
}

export default About
