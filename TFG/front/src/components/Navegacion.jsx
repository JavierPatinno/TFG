import { Link } from "react-router-dom";
import styles from './Navegacion.module.css';

const Navegacion = () => {
  const rutas = [
    { nombre: 'Home', path: '/' },
    { nombre: 'Modelos', path: '/modelos' },
    { nombre: 'About us', path: '/about' }
  ];

  return (
    <div className={styles.todo}>
      {rutas.map((ruta) => (
        <div key={ruta.nombre} className={styles.seccion}>
          <Link to={ruta.path}>
            <h2>{ruta.nombre}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navegacion;