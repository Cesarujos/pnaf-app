import React from 'react';
import '../style-sheets/Rango.css'

function Rango(props) {
    return (
        <div className="accordion_item" >
            <div className="accordion_header">
                <div className="image_header-container" style={{ backgroundColor: props.color }}>
                    <img className='imagen-header' src={require(`../IconsComponent/${props.imagen}.svg`)} alt="icono" />
                </div>
                <div className="text_header">
                    <div className="text_header-container">
                        <div className='frecuencia'>VLF (3 kHz - 30 kHz)</div>
                        <div className='name-frecuencia-english' >Very Low Frequency</div>
                        <div className='name-frecuencia-espanish'>Frecuencia muy baja</div>
                    </div>
                </div>
            </div>
            <div>
                {
                    props.datos.map((propiedad, index) => (
                        <div key={index} className='primary'>
                            {propiedad.Sprimario.length >= 2 ? (
                                propiedad.Sprimario.map((valor, subindex) => (
                                    <div key={subindex} className='primaryS'>{valor}</div>
                                ))
                            ) : (
                                propiedad.Sprimario[0]
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Rango;
