import React, { useState } from 'react';
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Rango from './components/Rango';

function App() {
  const componentData = [
    {
      color: "#4CC9F0",
      imagen: "faro",
      title: ["VLF (3 kHz - 30 kHz)", 'Very Low Frequency', 'Frecuencia muy baja'],
      propiedades: [
        {
          inicio: 3000,
          final: 9000,
          Sprimario: ['No atribuida']
        },
        {
          inicio: 9000,
          final: 14000,
          Sprimario: ["Radionavegación"]
        },
        {
          inicio: 14000,
          final: 19950,
          Sprimario: ['Fijo', 'Móvil marítimo']
        },
        {
          inicio: 19950,
          final: 20050,
          Sprimario: ["Frecuencias Patrón y Señales Horarias (20 kHz)"]
        },
        {
          inicio: 20050,
          final: 70000,
          Sprimario: ['Fijo', 'Móvil marítimo']
        }
      ]
    },
    {
      color: "#4895EF",
      imagen: "shipcontainer",
      title: ["LF (30 kHz - 300 kHz)", "Low Frequency", "Frecuencia baja"],
      propiedades: [
        {
          inicio: 20050,
          final: 70000,
          Sprimario: ["Fijo", "Móvil Marítimo"]
        },
        {
          inicio: 70000,
          final: 90000,
          Sprimario: ["Fijo", "Móvil Marítimo", "Radionavegación Marítima", "Radiolocalización"]
        },
        {
          inicio: 90000,
          final: 110000,
          Sprimario: ["Radionavegación", "Fijo"]
        },
        {
          inicio: 110000,
          final: 130000,
          Sprimario: ["Fijo", "Móvil Marítimo", "Radionavegación Marítima", "Radiolocalización"]
        },
        {
          inicio: 130000,
          final: 160000,
          Sprimario: ["Fijo", "Móvil Marítimo"]
        },
        {
          inicio: 160000,
          final: 190000,
          Sprimario: ["Fijo"]
        },
        {
          inicio: 190000,
          final: 200000,
          Sprimario: ["Radionavegación Aeronáutica"]
        },
        {
          inicio: 200000,
          final: 275000,
          Sprimario: ["Radionavegación Aeronáutica"]
        },
        {
          inicio: 275000,
          final: 285000,
          Sprimario: ["Radionavegación Aeronáutica", "Móvil aeronáutico", "Radionavegación marítima (radiofaros)"]
        },
        {
          inicio: 285000,
          final: 315000,
          Sprimario: ["Radionavegación marítima (radiofaros)", "Radionavegación aeronáutica"]
        }
      ]
    }

  ]

  const [openComponentIndex, setOpenComponentIndex] = useState(-1);

  function handleComponentToggle(index) {
    if (openComponentIndex === index) {
      // Si se hace clic en el componente ya abierto, ciérralo.
      setOpenComponentIndex(-1);
    } else {
      // Si se hace clic en un componente diferente, ábrelo y cierra el componente previamente abierto.
      setOpenComponentIndex(index);
    }
  }

  return (
    <div className="App">
      <div className="container-pnaf p-3">
        <h1 className="tiltle-pnf">Plan Nacional de Atribución de Frecuencias</h1>
        <p className="description-pnf">El PNAF contiene la distribución de frecuencias de los diferentes servicios de telecomunicaciones en el Perú, de tal forma que operen en bandas de frecuencias definidas previamente para cada uno de ellos, a fin de asegurar su operatividad y minimizar la probabilidad de interferencias.</p>
        <div className='container-df'>
          {componentData.map((data, index) => (
            <Rango
              key={index}
              index={index}
              onToggle={handleComponentToggle}
              isOpen={index === openComponentIndex}
              color={data.color}
              imagen={data.imagen}
              data={data.title}
              datos={data.propiedades}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;