import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Rango from './components/Rango';

function App() {
  return (
    <div className="App">
      <div className="container-pnaf p-3">
        <h1 className="tiltle-pnf">Plan Nacional de Atribución de Frecuencias</h1>
        <p className="description-pnf">El PNAF contiene la distribución de frecuencias de los diferentes servicios de telecomunicaciones en el Perú, de tal forma que operen en bandas de frecuencias definidas previamente para cada uno de ellos, a fin de asegurar su operatividad y minimizar la probabilidad de interferencias.</p>
        <div className='container-df'>
          <Rango color="#4CC9F0" imagen='faro'
            data = {
              ["VLF (3 kHz - 30 kHz)", 'Very Low Frequency', 'Frecuencia muy baja']
            }
            datos=
            {[
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
                Sprimario:['Fijo', 'Móvil marítimo']
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
            ]} />
        </div>
      </div>
    </div>
  );
}

export default App;
