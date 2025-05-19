import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import styles from './FormularioCorazon.module.css'

const FormularioCorazon = () => {
  const [pred, setPred] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await axios.post('http://localhost:8000/prediccion_corazon', data)
      setPred(res)
      console.log(res)
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  })

  return (
    <div className={styles.todo}>
      <form onSubmit={onSubmit} className={styles.formulario}>
 
        <div className={styles.entrada}>
          <label>Presión arterial alta</label>
          <p>¿Le han diagnosticado presión arterial alta?</p>
          <select {...register('HighBP', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.HighBP && <span>{errors.HighBP.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Colesterol alto</label>
          <p>¿Le han diagnosticado niveles altos de colesterol?</p>
          <select {...register('HighChol', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.HighChol && <span>{errors.HighChol.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Chequeo de colesterol</label>
          <p>¿Se ha realizado un chequeo de colesterol en los últimos 5 años?</p>
          <select {...register('CholCheck', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.CholCheck && <span>{errors.CholCheck.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Índice de masa corporal (IMC)</label>
          <p>Ingrese su IMC</p>
          <input
            type="number"
            {...register('BMI', {
              required: 'Este campo es obligatorio',
            })}
          />
          {errors.BMI && <span>{errors.BMI.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Fumador</label>
          <p>¿Fuma actualmente?</p>
          <select {...register('Smoker', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.Smoker && <span>{errors.Smoker.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Accidente cerebrovascular</label>
          <p>¿Ha tenido un ACV o enfermedad cardiovascular?</p>
          <select {...register('Stroke', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.Stroke && <span>{errors.Stroke.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Diabetes</label>
          <p>Seleccione su situación respecto a la diabetes</p>
          <select {...register('Diabetes', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={0}>No / Solo durante el embarazo</option>
            <option value={1}>Pre-diabetes </option>
            <option value={2}>Diabetes diagnosticada</option>
          </select>
          {errors.Diabetes && <span>{errors.Diabetes.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Actividad física</label>
          <p>¿Realiza actividad física regularmente?</p>
          <select {...register('PhysActivity', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.PhysActivity && <span>{errors.PhysActivity.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Consumo de frutas</label>
          <p>¿Consume frutas habitualmente?</p>
          <select {...register('Fruits', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.Fruits && <span>{errors.Fruits.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Consumo de vegetales</label>
          <p>¿Consume vegetales habitualmente?</p>
          <select {...register('Veggies', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.Veggies && <span>{errors.Veggies.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Consumo de alcohol</label>
          <p>¿Consume alcohol en exceso?</p>
          <select {...register('HvyAlcoholConsump', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.HvyAlcoholConsump && <span>{errors.HvyAlcoholConsump.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Atención médica</label>
          <p>¿Tiene acceso a servicios de salud?</p>
          <select {...register('AnyHealthcare', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.AnyHealthcare && <span>{errors.AnyHealthcare.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Estado general de salud</label>
          <p>Valor entre 1 (excelente) y 5 (mala)</p>
          <input
            type="number"
            {...register('GenHlth', {
              required: 'Este campo es obligatorio',
              min: { value: 1, message: 'El mínimo es 1' },
              max: { value: 5, message: 'El máximo es 5' }
            })}
          />
          {errors.GenHlth && <span>{errors.GenHlth.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Salud mental</label>
          <p>Días al mes con problemas de salud mental (0–30)</p>
          <input
            type="number"
            {...register('MentHlth', {
              required: 'Este campo es obligatorio',
              min: { value: 0, message: 'Mínimo 0' },
              max: { value: 30, message: 'Máximo 30' }
            })}
          />
          {errors.MentHlth && <span>{errors.MentHlth.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Salud física</label>
          <p>Días al mes con problemas de salud física (0–30)</p>
          <input
            type="number"
            {...register('PhysHlth', {
              required: 'Este campo es obligatorio',
              min: { value: 0, message: 'Mínimo 0' },
              max: { value: 30, message: 'Máximo 30' }
            })}
          />
          {errors.PhysHlth && <span>{errors.PhysHlth.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Dificultad para caminar</label>
          <p>¿Tiene dificultad para caminar o subir escaleras?</p>
          <select {...register('DiffWalk', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          {errors.DiffWalk && <span>{errors.DiffWalk.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Sexo</label>
          <p>Seleccione su sexo</p>
          <select {...register('Sex', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>Hombre</option>
            <option value={0}>Mujer</option>
          </select>
          {errors.Sex && <span>{errors.Sex.message}</span>}
        </div>

        <div className={styles.entrada}>
          <label>Grupo de edad</label>
          <p>Seleccione el grupo al que pertenece</p>
          <select {...register('Age', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccione una opción</option>
            <option value={1}>18–24</option>
            <option value={2}>25–29</option>
            <option value={3}>30–34</option>
            <option value={4}>35–39</option>
            <option value={5}>40–44</option>
            <option value={6}>45–49</option>
            <option value={7}>50–54</option>
            <option value={8}>55–59</option>
            <option value={9}>60–64</option>
            <option value={10}>65–69</option>
            <option value={11}>70–74</option>
            <option value={12}>75–79</option>
            <option value={13}>80 o más</option>
          </select>
          {errors.Age && <span>{errors.Age.message}</span>}
        </div>

        <button type="submit">ENVIAR</button>
      </form>

      {pred && (
          <div className={styles.resultado}>
            <h2>Resultado de la Predicción</h2>
            <p>
              La <strong>probabilidad estimada promedio</strong> de riesgo cardiovascular, calculada a partir de la combinación de los tres modelos utilizados, es del <strong>{Math.round(pred.data.predicciones.probabilidad_media * 100)}%</strong>.
            </p>
            <p>
              De manera individual, el modelo basado en red neuronal artificial (ANN) estimó una probabilidad de <strong>{Math.round(pred.data.predicciones.prediccion_ann * 100)}%</strong>, el modelo LightGBM arrojó una estimación de <strong>{Math.round(pred.data.predicciones.prediccion_lgbm * 100)}%</strong>, y el modelo Random Forest reportó una probabilidad de <strong>{Math.round(pred.data.predicciones.prediccion_rf * 100)}%</strong>.
            </p>
            <p>
              Estas predicciones deben ser interpretadas en conjunto con información clínica adicional, y están destinadas a complementar, no reemplazar, el juicio médico.
            </p>
          </div>
        )}
    </div>
  )
}

export default FormularioCorazon;

