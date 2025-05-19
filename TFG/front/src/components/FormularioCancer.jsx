import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import styles from "./Formulario.module.css"

const FormularioCancer = () => {
  const { handleSubmit, register, setError, formState: { errors } } = useForm()
  const [pred, setPred] = useState(null)
  const [file, setFile] = useState(null)

  const onSubmit = async () => {
    const formData = new FormData()
    formData.append("imagen", file)

    try {
      const res = await axios.post("http://localhost:8000/prediccion_cancer", formData)
      setPred(res.data.prediccion);
    } catch (error) {
      console.error("Error al enviar los datos", error)
    }
  }

  return (
    <div className={styles.todo}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario} encType="multipart/form-data">
        <div>
          <label htmlFor="imagen">Sube una imagen para análisis</label>
          <input
            type="file"
            id="imagen"
            accept="image/*"
            {...register("imagen")}
            onChange={(e) => {
              setFile(e.target.files[0]);
              setPred(null);
            }}
          />
          {errors.imagen && <span>{errors.imagen.message}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {pred !== null && (
          <div className={styles.resultado}>
          <h2>Resultado del Análisis</h2>
          <p>
            La probabilidad estimada de presencia de carcinoma ductal invasivo (IDC) en la imagen analizada es del <strong>{Math.round(pred * 100)}%</strong>.
          </p>
          <p>
            Esta predicción debe ser interpretada en conjunto con información clínica adicional, y está destinada a complementar, no reemplazar, el juicio médico.
          </p>
        </div>
      )}
    </div>
  )
}

export default FormularioCancer;


