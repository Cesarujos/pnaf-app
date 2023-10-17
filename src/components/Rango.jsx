import React, { useState } from 'react';
import '../style-sheets/Rango.css'

function Rango(props) {

    const colors = ['#F9F9F9', '#E1F6FF', '#FFC300', '#E2FFE3', '#DAF7A6', '#FF5733'];
    const colors2 = ['#FFE2E2', '#FFF9E2', '#FFF9E2', '#FE2E2','#9FF9E2'];

    const [isClick, setIsClick] = useState(false);

    function handleAccordionClick() {
        setIsClick(!isClick);
    }
    return (
        <div className={`accordion_item ${isClick ? 'accordion_item_2' : ''}`} >
            <div className={`accordion_header ${isClick ? 'accordion_header_2' : ''}`}>
                <div className="image_header-container" style={{ backgroundColor: props.color }} onClick={handleAccordionClick}>
                    <img className= {`imagen-header ${isClick ? 'imagen-header_2' : ''}`} src={require(`../IconsComponent/${props.imagen}.svg`)} alt="icono" />
                </div>
                <div className={`text_header ${isClick ? 'text_header_2' : ''}`}>
                    <div className="text_header-container">
                        <div className='frecuencia'>{props.data[0]}</div>
                        <div className='name-frecuencia-english' >{props.data[1]}</div>
                        <div className='name-frecuencia-espanish'>{props.data[2]}</div>
                    </div>
                </div>
            </div>
            <div className= {`propiedades-container ${isClick ? 'propiedades-container_2' : ''}`}>
                {
                    props.datos.map((propiedad, index) => (
                        <div key={index} className='primary' style={{height: `${Math.log10(propiedad.final - propiedad.inicio) * 15 + 10}px`, backgroundColor: `${colors[index]}`}}>
                            {propiedad.Sprimario.length >= 2 ? (
                                propiedad.Sprimario.map((valor, subindex) => (
                                    <div key={subindex} className='primaryS' style={{ width: `calc(100% / ${propiedad.Sprimario.length})`, backgroundColor: `${colors2[subindex]}`}}>{valor}</div>
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
