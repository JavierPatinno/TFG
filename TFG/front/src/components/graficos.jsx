import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale)

export const Grafico = ({ datos }) => {
  const [datosProgresivos, setDatosProgresivos] = useState([])

  useEffect(() => {
    let indice = 0
    let intervalo = null

    const iniciarAnimacion = () => {
      setDatosProgresivos([])
      indice = 0
      intervalo = setInterval(() => {
        if (indice < datos.loss.length) {
          setDatosProgresivos(prev => [
            ...prev,
            {
              epoca: indice + 1,
              perdida: datos.loss[indice],
              perdida_val: datos.val_loss[indice],
              precision: datos.accuracy[indice],
              precision_val: datos.val_accuracy[indice],
            }
          ])
          indice++
        } else {
          clearInterval(intervalo)
          setTimeout(() => {
            iniciarAnimacion()  
          }, 2000)
        }
      }, 1000)
    }

    iniciarAnimacion()

    return () => clearInterval(intervalo)  
  }, [datos])

  const datosGrafico = {
    labels: datosProgresivos.map(d => `Época ${d.epoca}`),
    datasets: [
      {
        label: 'Pérdida Entrenamiento',
        data: datosProgresivos.map(d => d.perdida),
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Pérdida Validación',
        data: datosProgresivos.map(d => d.perdida_val),
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Precisión Entrenamiento',
        data: datosProgresivos.map(d => d.precision),
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.4,
        fill: false,
        yAxisID: 'precision',
      },
      {
        label: 'Precisión Validación',
        data: datosProgresivos.map(d => d.precision_val),
        borderColor: 'rgba(255, 206, 86, 1)',
        tension: 0.4,
        fill: false,
        yAxisID: 'precision',
      }
    ],
  }

  const opcionesGrafico = {
    responsive: true,
    animation: {
      duration: 300,
    },
    scales: {
      y: {
        title: { display: true, text: 'Pérdida' },
      },
      precision: {
        position: 'right',
        title: { display: true, text: 'Precisión' },
        min: 0,
        max: 1,
      },
      x: {
        title: { display: true, text: 'Épocas' },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Historial de Entrenamiento</h2>
      <Line data={datosGrafico} options={opcionesGrafico} />
    </div>
  )
}
