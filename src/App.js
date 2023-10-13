import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; //Versión no minimizada

function App() {
  return (
    <div className="App">
      <div className="mt-5 p-4 w-100 max-width-72rem">
        <div className="w-75 px-5">
          <div className="container-pnaf">
            <h1 className="tiltle-pnf">Plan Nacional de Atribución de Frecuencias</h1>
            <p className="description-pnf">El PNAF contiene la distribución de frecuencias de los diferentes servicios de telecomunicaciones en el Perú, de tal forma que operen en bandas de frecuencias definidas previamente para cada uno de ellos, a fin de asegurar su operatividad y minimizar la probabilidad de interferencias.</p>
            <div className='container-df'>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
