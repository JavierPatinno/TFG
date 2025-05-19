import Modelo from "../components/ModelosPlantilla"
import styles from './Home.module.css'

const Modelos = () => {
  const modelos = [
    {
      titulo: "Evaluación del Riesgo Cardiovascular mediante Datos Clínicos",
      ruta: "Modelo_Corazon",
      descripcion_general:
        "Estos modelos emplean técnicas de aprendizaje automático para estimar el riesgo de enfermedad cardiovascular a partir de variables clínicas estructuradas. Están diseñados como herramienta de apoyo a profesionales de la salud en el análisis de factores de riesgo individuales. Para su desarrollo se entrenaron y compararon tres algoritmos: una red neuronal artificial (ANN), un modelo de Random Forest y un modelo de LightGBM.",
      objetivo:
        "Proporcionar una estimación cuantitativa del riesgo cardiovascular basada en patrones extraídos de bases de datos clínicas. Su propósito es complementar el juicio clínico en contextos de prevención o seguimiento médico.",
      tipo_de_datos_utilizados: [
        "Indicadores clínicos como índice de masa corporal (IMC), presión arterial, glucosa y estado general de salud.",
        "Información sobre hábitos y antecedentes personales (actividad física, tabaquismo, edad, género)."
      ],
      funcionamientos: [
        {
          paso: "Ingreso de Datos Clínicos",
          descripcion:
            "El profesional introduce los valores correspondientes al perfil del paciente en el formulario de entrada."
        },
        {
          paso: "Procesamiento del Modelo",
          descripcion:
            "Los datos son normalizados y procesados por un modelo de red neuronal previamente entrenado con registros clínicos anonimizados."
        },
        {
          paso: "Generación de Resultado",
          descripcion:
            "El sistema emite una predicción de riesgo en forma de probabilidad binaria (presencia o ausencia de enfermedad cardiovascular)."
        }
      ],
      precision_y_fiabilidad:
        "El modelo ha sido entrenado con una muestra balanceada derivada de un conjunto clínico validado. Alcanzó un 76% de precisión en la clasificación binaria durante las pruebas de validación.",
      datos: {
        accuracy: [0.7367313504219055, 0.740208625793457, 0.7449060678482056, 0.7438079714775085, 0.7437469363212585, 0.7452110648155212, 0.7447230219841003, 0.745150089263916, 0.7459126114845276, 0.7449975609779358, 0.7473462820053101, 0.7467666864395142, 0.7471327185630798, 0.7481088042259216, 0.748901903629303, 0.7484138607978821, 0.7464311718940735, 0.7473462820053101, 0.747773289680481, 0.7482918500900269],
        loss: [0.53581303358078, 0.527125895023346, 0.524397075176239, 0.5238478779792786, 0.523030698299408, 0.5220524072647095, 0.5229604244232178, 0.5209096670150757, 0.5196099877357483, 0.5211394429206848, 0.520132839679718, 0.5194669365882874, 0.5182061195373535, 0.5183224081993103, 0.5162400007247925, 0.5167282223701477, 0.5180556178092957, 0.5164303183555603, 0.5162949562072754, 0.5160150527954102],
        val_accuracy: [0.7479258179664612, 0.7406051754951477, 0.7430453896522522, 0.748901903629303, 0.7447535395622253, 0.7423133254051208, 0.7445095181465149, 0.7532942891120911, 0.746217668056488, 0.7457296252250671, 0.7484138607978821, 0.751098096370697, 0.7449975609779358, 0.7501220107078552, 0.7506100535392761, 0.7484138607978821, 0.7445095181465149, 0.7491459250450134, 0.7432894110679626, 0.751098096370697],
        val_loss: [0.5214034914970398, 0.5212663412094116, 0.5233706831932068, 0.5263301730155945, 0.5164215564727783, 0.5273672342300415, 0.5228664875030518, 0.5176101922988892, 0.5207042098045349, 0.5224878191947937, 0.5203551650047302, 0.5241394639015198, 0.5371202826499939, 0.5219900608062744, 0.5171894431114197, 0.5198611617088318, 0.5173380970954895, 0.5170097351074219, 0.527129590511322, 0.5177126526832581]
      }
    },
    {
      titulo: "Clasificación de Enfermedades Pulmonares en Radiografías de Tórax",
      ruta: "Modelo_Pulmones",
      descripcion_general:
        "Este modelo está basado en una red neuronal convolucional (CNN) entrenada con radiografías torácicas para la identificación de patologías pulmonares comunes. Se orienta al análisis preliminar de imágenes en entornos clínicos.",
      objetivo:
        "Apoyar la revisión de radiografías mediante una segunda lectura automatizada capaz de identificar patrones asociados con afecciones pulmonares frecuentes.",
      tipo_de_datos_utilizados: [
        "Radiografías de tórax digitalizadas en formatos estándar.",
      ],
      funcionamientos: [
        {
          paso: "Carga de la Imagen",
          descripcion:
            "El usuario sube una radiografía de tórax para su análisis mediante el modelo CNN."
        },
        {
          paso: "Extracción de Características",
          descripcion:
            "El modelo identifica regiones relevantes de la imagen y evalúa la presencia de patrones compatibles con patologías pulmonares."
        },
        {
          paso: "Emisión de Predicción",
          descripcion:
            "El sistema genera un resultado probabilístico indicando la posible presencia de enfermedad en la imagen analizada."
        }
      ],
      precision_y_fiabilidad:
        "El modelo alcanzó un 89% de precisión global en la clasificación multiclase.",
      datos: {
        accuracy: [0.6429023146629333, 0.809112012386322, 0.8569921851158142],
        loss: [1.1534758806228638, 0.6041103601455688, 0.45053642988204956],
        val_accuracy: [0.8080708384513855, 0.8395669460296631, 0.8572834730148315],
        val_loss: [0.6402664184570312, 0.4706980288028717, 0.43880173563957214]
      }
    },
    {
      titulo: "Detección de Cáncer de Mama en Imágenes Histológicas",
      ruta: "Modelo_Cancer",
      descripcion_general:
        "Este modelo identifica la presencia de carcinoma ductal invasivo (IDC) en imágenes microscópicas de tejido mamario. Está basado en la clasificación automática de parches de imágenes obtenidas de cortes histológicos digitalizados.",
      objetivo:
        "Asistir en el proceso de revisión patológica proporcionando una evaluación automatizada de regiones sospechosas dentro de muestras con posible presencia de IDC.",
      tipo_de_datos_utilizados: [
        "Parches de 50x50 píxeles extraídos de muestras histológicas completas escaneadas a 40x.",
        "Etiquetas binarias que identifican cada parche como IDC positivo (1) o negativo (0)."
      ],
      funcionamientos: [
        {
          paso: "Entrada del Parche Histológico",
          descripcion:
            "Se analiza cada parche individual, previamente segmentado de una imagen patológica completa."
        },
        {
          paso: "Clasificación del Tejido",
          descripcion:
            "El modelo asigna una probabilidad a cada parche en función de su similitud con patrones asociados a IDC."
        },
        {
          paso: "Generación de Resultado",
          descripcion:
            "El sistema emite una clasificación para el parche examinado, permitiendo la reconstrucción de regiones afectadas en el contexto completo."
        }
      ],
      precision_y_fiabilidad:
        "El modelo obtuvo resultados robustos en la separación entre tejido sano y tejido afectado por carcinoma IDC. con un 91% de precision",
      datos: {
        accuracy: [0.8247826099395752, 0.8642391562461853, 0.8715217113494873, 0.8832608461380005, 0.8907608985900879, 0.9023913145065308, 0.9023913145065308, 0.9156521558761597, 0.9166304469108582, 0.917391300201416, 0.9183695912361145, 0.9235869646072388, 0.927173912525177, 0.9331521987915039, 0.9342391490936279],
        loss: [0.3944908678531647, 0.32872113585472107, 0.3007175028324127, 0.28406646847724915, 0.2592104375362396, 0.24604865908622742, 0.24208585917949677, 0.2186405211687088, 0.21418356895446777, 0.20524002611637115, 0.20557793974876404, 0.19386246800422668, 0.18602204322814941, 0.17112740874290466, 0.16829100251197815],
        val_accuracy: [0.7921739220619202, 0.8295652270317078, 0.8513043522834778, 0.8773912787437439, 0.8660869598388672, 0.8600000143051147, 0.9095652103424072, 0.8765217661857605, 0.8808695673942566, 0.7652173638343811, 0.9113043546676636, 0.9060869812965393, 0.895652174949646, 0.8799999952316284, 0.8791304230690002],
        val_loss: [0.4320896565914154, 0.4215368330478668, 0.34599462151527405, 0.4174744188785553, 0.38093459606170654, 0.3409086763858795, 0.22853662073612213, 0.29794105887413025, 0.2819153964519501, 0.6041065454483032, 0.2416720688343048, 0.2210586965084076, 0.300950825214386, 0.2874281108379364, 0.2883666157722473]
      }
    }
  ]

  return (
    <div className={styles.todo}>
      {modelos.map((modelo, key) => (
        <Modelo modelo={modelo} key={key} />
      ))}
    </div>
  )
}

export default Modelos
