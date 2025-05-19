import { Link } from 'react-router-dom'
import styles from './ModelosPlantilla.module.css'
import { Grafico } from './graficos'

const Modelo = ({ modelo }) => {
    return (
    <div className={styles.secciones}>
        <h2>{modelo.titulo}</h2>
        <h4>Descripción General</h4>
        <p>{modelo.descripcion_general}</p>
        <h4>Objetivo del modelo</h4>
        <p>{modelo.objetivo}</p>
        <h4>Tipos de datos usados</h4>
        <ul>
        {modelo.tipo_de_datos_utilizados.map((dato, key) => (
            <li key={key}>{dato}</li>
        ))}
        </ul>

        <h4>Funcionamiento del modelo</h4>
        <ul>
            {modelo.funcionamientos.map((funcionamiento, key) => (
                <li key={key}><strong>{funcionamiento.paso}</strong> {funcionamiento.descripcion}</li>
            ))}
        </ul>
        <h4>Precision y fiabilidad</h4>
        <p>{modelo.precision_y_fiabilidad}</p>
        <Grafico datos={modelo.datos}/>
        <Link to={`${modelo.ruta}`}>
        <button>Usar modelo</button>
        </Link>
    
    </div>
    )
}

export default Modelo