import { useParams } from "react-router-dom"
import FormularioCorazon from "../components/FormularioCorazon"
import FormularioPulmon from "../components/FormularioPulmon"
import FormularioCancer from "../components/FormularioCancer"

const modelos = {
    'Modelo_Corazon': {
        nombre: 'Modelo de Enfermedades Cardiovasculares',
        formulario: FormularioCorazon
    },
    'Modelo_Pulmones': {
        nombre: 'Modelo de Enfermedades Pulmonares',
        formulario: FormularioPulmon
    },
    'Modelo_Cancer': {
        nombre: 'Modelo de Cáncer de Mama',
        formulario: FormularioCancer
    }
}

const Modelo = () => {
    const { modeloID } = useParams()
    const modelo = modelos[modeloID]

    if (!modelo) {
        return <h2>Modelo no encontrado</h2>
    }

    const Formulario = modelo.formulario

    return (
        <>
            <h1>{modelo.nombre}</h1>
            <Formulario />
        </>
    )
}

export default Modelo