import React, { useEffect } from 'react';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'
import '../style-sheets/RangoFrec.css'
import chroma from "chroma-js";

function RangoFrecuencia(props) {
    useEffect(() => {
        const headerDelAcordion = document.getElementById(`frecuencia ${props.keyE}`);
        const headerDelAcordionPadre = headerDelAcordion.parentNode;
        headerDelAcordionPadre.style.background = `linear-gradient(90deg, ${props.color} 25%, #FFFF 55%)`;
    }, [props.keyE, props.color]);

    useEffect(() => {
        const numColors = 100
        const colorScale = chroma.scale(['#f8ffa8', '#ffb8a4', '#ff9b9b', '#dba7ea', '#9199ff']).domain([0, numColors]);
        const propiedades = document.querySelectorAll('.propiedad');

        for (let i = 0; i < propiedades.length; i++) {
            const index = i % (numColors*2);
            const color = index < numColors ? colorScale(index).hex() : colorScale(2 * numColors - index - 1);
            propiedades[i].style.backgroundColor = color;
        }
    }, []);


    return (
        <AccordionItem eventKey={props.keyE} >
            <AccordionHeader>
                <div id={`frecuencia ${props.keyE}`} className='accordion_header'>
                    <div className='imagen-header_container'>
                        <img style={{ height: "80px" }} src={require(`../IconsComponent/${props.imagen}.svg`)} alt={`Icono de + ${props.imagen}`} />
                    </div>
                    <div className='text_header-container'>
                        <div>
                            <div className='frecuencia'>{props.data[0]}</div>
                            <div className='name-frecuencia-english'>{props.data[1]}</div>
                            <div className='name-frecuencia-espanish'>{props.data[2]}</div>
                        </div>
                    </div>
                </div>
            </AccordionHeader>
            <AccordionBody>
                <div className="propiedades-container">
                    {props.datos.map((propiedad, index) => (
                        <div key={index} className='row-propiedades'>
                            {propiedad.Sprimario.length >= 2 ? (
                                propiedad.Sprimario.map((valor, subindex) => (
                                    <div key={subindex} className='multicolumn-propiedad propiedad' style={{ width: `calc(100% / ${propiedad.Sprimario.length})`, height: `${Math.log10(propiedad.final - propiedad.inicio) * 15 + 20}px` }}>
                                        <p className='propiedad-text'>{valor}</p>
                                        <p className="propiedad-text">{`${propiedad.inicio}-${propiedad.final} Hz`}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="unique-propiedad propiedad" style={{ height: `${Math.log10(propiedad.final - propiedad.inicio) * 15 + 20}px` }}>
                                    <p className='propiedad-text'>{propiedad.Sprimario[0]}</p>
                                    <p className="propiedad-text">{`${propiedad.inicio}-${propiedad.final} Hz`}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </AccordionBody>
        </AccordionItem>
    );
}

export default RangoFrecuencia;