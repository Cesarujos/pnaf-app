import React from 'react';
import '../style-sheets/Rango.css';

function Rango(props) {
    const colors2 = ["#FFECB3", "#B2DFDB", "#E1BEE7", "#T1BEb7"];
    const colors = colors2


    function handleAccordionClick() {
        props.onToggle(props.index);
    }

    return (
        <div className={`accordion_item ${props.isOpen ? 'accordion_item_2' : ''}`}>
            <div className={`accordion_header ${props.isOpen ? 'accordion_header_2' : ''}`}>
                <div className="image_header-container" style={{ backgroundColor: props.color }} onClick={handleAccordionClick}>
                    <img className={`imagen-header ${props.isOpen ? 'imagen-header_2' : ''}`} src={require(`../IconsComponent/${props.imagen}.svg`)} alt="icono" />
                </div>
                <div className={`text_header ${props.isOpen ? 'text_header_2' : ''}`}>
                    <div className="text_header-container">
                        <div className='frecuencia'>{props.data[0]}</div>
                        <div className='name-frecuencia-english'>{props.data[1]}</div>
                        <div className='name-frecuencia-espanish'>{props.data[2]}</div>
                    </div>
                </div>
            </div>
            <div className={`propiedades-container ${props.isOpen ? 'propiedades-container_2' : ''}`}>
                {props.datos.map((propiedad, index) => (
                    <div key={index} className='primary' style={{ height: `${Math.log10(propiedad.final - propiedad.inicio) * 15 + 10}px`, backgroundColor: `${colors[index]}` }}>
                        {propiedad.Sprimario.length >= 2 ? (
                            propiedad.Sprimario.map((valor, subindex) => (
                                <div key={subindex} className='primaryS' style={{ width: `calc(100% / ${propiedad.Sprimario.length})`, backgroundColor: `${colors2[subindex]}`}}>{valor}</div>
                            ))
                        ) : (
                            propiedad.Sprimario[0]
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rango;
