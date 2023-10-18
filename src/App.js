import React from 'react';
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'

import RangoFrecuencia from './components/RangoFrec';



function App() {
  const componentData = [
    {
      color: "#049DBF",
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
      color: "#085CA6",
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
    },
    {
      color: "#0D0973",
      imagen: "aircraft",
      title: ["MF (300000 kHz	- 3000000 kHz)", "Medium Frequency", "Frecuencia Media"],
      propiedades: [
        {
          "inicio": 285000,
          "final": 315000,
          "Sprimario": ["Radionavegación marítima (radiofaros)", "Radionavegación aeronáutica"]
        },
        {
          "inicio": 315000,
          "final": 325000,
          "Sprimario": ["Radionavegación marítima (radiofaros)"]
        },
        {
          "inicio": 325000,
          "final": 335000,
          "Sprimario": ["Radionavegación aeronáutica"]
        },
        {
          "inicio": 335000,
          "final": 405000,
          "Sprimario": ["Radionavegación aeronáutica"]
        },
        {
          "inicio": 405000,
          "final": 415000,
          "Sprimario": ["Radionavegación"]
        },
        {
          "inicio": 415000,
          "final": 495000,
          "Sprimario": ["Móvil aeronáutico"]
        },
        {
          "inicio": 495000,
          "final": 505000,
          "Sprimario": ["Móvil (socorro y llamada)"]
        },
        {
          "inicio": 505000,
          "final": 510000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 510000,
          "final": 525000,
          "Sprimario": ["Móvil"]
        },
        {
          "inicio": 525000,
          "final": 535000,
          "Sprimario": ["Radionavegación aeronáutica"]
        },
        {
          "inicio": 535000,
          "final": 1705000,
          "Sprimario": ["Radionavegación aeronáutica"]
        },
        {
          "inicio": 1705000,
          "final": 1800000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 1800000,
          "final": 1850000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 1850000,
          "final": 2000000,
          "Sprimario": ["Radioaficionados"]
        },
        {
          "inicio": 2000000,
          "final": 2065000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 2065000,
          "final": 2107000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 2107000,
          "final": 2170000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 2170000,
          "final": 2173500,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 2173500,
          "final": 2190500,
          "Sprimario": ["Móvil (socorro y llamada)"]
        },
        {
          "inicio": 2190500,
          "final": 2194000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 2194000,
          "final": 2300000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 2300000,
          "final": 2495000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 2495000,
          "final": 2501000,
          "Sprimario": ["Frecuencias patrón y señales horarias (2 500 kHz)"]
        },
        {
          "inicio": 2501000,
          "final": 2502000,
          "Sprimario": ["Frecuencias patrón y señales horarias"]
        },
        {
          "inicio": 2502000,
          "final": 2505000,
          "Sprimario": ["Frecuencias patrón y señales horarias"]
        },
        {
          "inicio": 2505000,
          "final": 2850000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 2850000,
          "final": 3025000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        }
      ]
    },
    {
      color: "#59005C",
      imagen: "weather",
      title: ["HF (3000000	kHz	- 30000000 kHz)", "High Frequency", "Frecuencia Alta"],
      propiedades: [
        {
          "inicio": 3025000,
          "final": 3155000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 3155000,
          "final": 3200000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 3200000,
          "final": 3400000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 3400000,
          "final": 3500000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 3500000,
          "final": 3750000,
          "Sprimario": ["Radioaficionados"]
        },
        {
          "inicio": 3750000,
          "final": 4000000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 4000000,
          "final": 4063000,
          "Sprimario": ["Fijo", "Móvil marítimo"]
        },
        {
          "inicio": 4063000,
          "final": 4438000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 4438000,
          "final": 4650000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 4650000,
          "final": 4700000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 4700000,
          "final": 4750000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 4750000,
          "final": 4995000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 4995000,
          "final": 5003000,
          "Sprimario": ["Frecuencias patrón y señales horarias (5 000 kHz)"]
        },
        {
          "inicio": 5003000,
          "final": 5005000,
          "Sprimario": ["Frecuencias patrón y señales horarias"]
        },
        {
          "inicio": 5005000,
          "final": 5060000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 5060000,
          "final": 5450000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico"]
        },
        {
          "inicio": 5450000,
          "final": 5680000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 5680000,
          "final": 5730000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 5730000,
          "final": 5900000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 5900000,
          "final": 6200000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 6200000,
          "final": 6525000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 6525000,
          "final": 6685000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 6685000,
          "final": 6765000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 6765000,
          "final": 7000000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 7000000,
          "final": 7100000,
          "Sprimario": ["Radioaficionados", "Radioaficionados por satélite"]
        },
        {
          "inicio": 7100000,
          "final": 7300000,
          "Sprimario": ["Radioaficionados"]
        },
        {
          "inicio": 7300000,
          "final": 7400000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 7400000,
          "final": 7450000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 7450000,
          "final": 8100000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 8100000,
          "final": 8195000,
          "Sprimario": ["Fijo", "Móvil marítimo"]
        },
        {
          "inicio": 8195000,
          "final": 8815000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 8815000,
          "final": 8965000,
          "Sprimario": ["Fijo", "Móvil aeronáutico (R)"]
        },
        {
          "inicio": 8965000,
          "final": 9040000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 9040000,
          "final": 9400000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 9400000,
          "final": 9500000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 9500000,
          "final": 9775000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 9775000,
          "final": 9900000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 9900000,
          "final": 9995000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 9995000,
          "final": 10003000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 10003000,
          "final": 10005000,
          "Sprimario": ["Frecuencias patrón y señales horarias (10 000 kHz)"]
        },
        {
          "inicio": 10005000,
          "final": 10010000,
          "Sprimario": ["Frecuencias patrón y señales horarias"]
        },
        {
          "inicio": 10010000,
          "final": 10100000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 10100000,
          "final": 10150000,
          "Sprimario": ["Fijo", "Radioaficionados"]
        },
        {
          "inicio": 10150000,
          "final": 11175000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 11175000,
          "final": 11275000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 11275000,
          "final": 11400000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 11400000,
          "final": 11600000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 11600000,
          "final": 11650000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 11650000,
          "final": 12050000,
          "Sprimario": ["Fijo", "Radiodifusión"]
        },
        {
          "inicio": 12050000,
          "final": 12100000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 12100000,
          "final": 12230000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 12230000,
          "final": 13200000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 13200000,
          "final": 13260000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 13260000,
          "final": 13360000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 13360000,
          "final": 13410000,
          "Sprimario": ["Fijo", "Radioastronomía"]
        },
        {
          "inicio": 13410000,
          "final": 13570000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 13570000,
          "final": 13600000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 13600000,
          "final": 13800000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 13800000,
          "final": 13870000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 13870000,
          "final": 14000000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 14000000,
          "final": 14250000,
          "Sprimario": ["Aficionados", "Aficionados por satélite"]
        },
        {
          "inicio": 14250000,
          "final": 14350000,
          "Sprimario": ["Radioaficionados"]
        },
        {
          "inicio": 14350000,
          "final": 14990000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 14990000,
          "final": 15005000,
          "Sprimario": ["Frecuencias patrón y señales horarias (15 000 kHz)"]
        },
        {
          "inicio": 15005000,
          "final": 15010000,
          "Sprimario": ["Frecuencias patrón y señales horarias"]
        },
        {
          "inicio": 15010000,
          "final": 15100000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 15100000,
          "final": 15600000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 15600000,
          "final": 15800000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 15800000,
          "final": 16360000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 16360000,
          "final": 17410000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 17410000,
          "final": 17550000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 17480000,
          "final": 17550000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 17550000,
          "final": 17900000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 17900000,
          "final": 17970000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 17970000,
          "final": 18030000,
          "Sprimario": ["Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 18030000,
          "final": 18052000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 18052000,
          "final": 18068000,
          "Sprimario": ["Fijo", "Investigación espacial"]
        },
        {
          "inicio": 18068000,
          "final": 18168000,
          "Sprimario": ["Radioaficionados", "Radioaficionados por satélite"]
        },
        {
          "inicio": 18168000,
          "final": 18780000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico"]
        },
        {
          "inicio": 18780000,
          "final": 18900000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 18900000,
          "final": 19020000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 19020000,
          "final": 19680000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 19680000,
          "final": 19800000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 19800000,
          "final": 19990000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 19990000,
          "final": 19995000,
          "Sprimario": ["Frecuencias patrón y señales horarias", "Investigación espacial"]
        },
        {
          "inicio": 19995000,
          "final": 20010000,
          "Sprimario": ["Frecuencias patrón y señales horarias (20 000 kHz)"]
        },
        {
          "inicio": 20010000,
          "final": 21000000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 21000000,
          "final": 21450000,
          "Sprimario": ["Radioaficionados", "Radioaficionados por satélite"]
        },
        {
          "inicio": 21450000,
          "final": 21850000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 21850000,
          "final": 21870000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 21870000,
          "final": 21924000,
          "Sprimario": ["Fijo aeronáutico"]
        },
        {
          "inicio": 21924000,
          "final": 22000000,
          "Sprimario": ["Móvil aeronáutico (R)"]
        },
        {
          "inicio": 22000000,
          "final": 22855000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 22855000,
          "final": 23000000,
          "Sprimario": ["Fijo"]
        },
        {
          "inicio": 23000000,
          "final": 23200000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico (R)"]
        },
        {
          "inicio": 23200000,
          "final": 23350000,
          "Sprimario": ["Fijo aeronáutico", "Móvil aeronáutico (OR)"]
        },
        {
          "inicio": 23350000,
          "final": 24000000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico"]
        },
        {
          "inicio": 24000000,
          "final": 24890000,
          "Sprimario": ["Fijo", "Móvil terrestre"]
        },
        {
          "inicio": 24890000,
          "final": 24990000,
          "Sprimario": ["Radioaficionados", "Radioaficionados por satélite"]
        },
        {
          "inicio": 24990000,
          "final": 25005000,
          "Sprimario": ["Frecuencias patrón y señales horarias (25 000 kHz)"]
        },
        {
          "inicio": 25005000,
          "final": 25010000,
          "Sprimario": ["Frecuencias patrón y señales horarias", "Investigación espacial"]
        },
        {
          "inicio": 25010000,
          "final": 25070000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico"]
        },
        {
          "inicio": 25070000,
          "final": 25210000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 25210000,
          "final": 25550000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico"]
        },
        {
          "inicio": 25550000,
          "final": 25670000,
          "Sprimario": ["Radioastronomía"]
        },
        {
          "inicio": 25670000,
          "final": 26100000,
          "Sprimario": ["Radiodifusión"]
        },
        {
          "inicio": 26100000,
          "final": 26175000,
          "Sprimario": ["Móvil marítimo"]
        },
        {
          "inicio": 26175000,
          "final": 26965000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico"]
        },
        {
          "inicio": 26965000,
          "final": 27405000,
          "Sprimario": ["Fijo", "Móvil"]
        },
        {
          "inicio": 27405000,
          "final": 27500000,
          "Sprimario": ["Fijo", "Móvil salvo móvil aeronáutico"]
        },
        {
          "inicio": 27500000,
          "final": 28000000,
          "Sprimario": ["Ayudas a la meteorología", "Fijo", "Móvil"]
        },
        {
          "inicio": 28000000,
          "final": 29700000,
          "Sprimario": ["Radioaficionados", "Radioaficionados por satélite"]
        },
        {
          "inicio": 29700000,
          "final": 30005000,
          "Sprimario": ["Fijo", "Móvil"]
        }
      ]
    }
  ]

  return (
    <div className="App">
      <div className="container-pnaf p-3">
        <h1 className="tiltle-pnf">Plan Nacional de Atribución de Frecuencias</h1>
        <p className="description-pnf">El PNAF contiene la distribución de frecuencias de los diferentes servicios de telecomunicaciones en el Perú, de tal forma que operen en bandas de frecuencias definidas previamente para cada uno de ellos, a fin de asegurar su operatividad y minimizar la probabilidad de interferencias.</p>
        <Accordion className='container-df'>
          {componentData.map((data, index) => (
            <RangoFrecuencia
              keyE={index}
              color={data.color}
              imagen={data.imagen}
              data={data.title}
              datos={data.propiedades}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default App;