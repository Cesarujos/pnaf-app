import React, { useEffect, useState } from 'react';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'
import '../style-sheets/RangoFrec.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function RangoFrecuencia(props) {
    //Poner colores al header que no se puede acceder directamente con el return poque es parte del componente de reactBoostrap
    useEffect(() => {
        const headerDelAcordion = document.getElementById(`frecuencia ${props.keyE}`);
        const headerDelAcordionPadre = headerDelAcordion.parentNode;
        headerDelAcordionPadre.style.background = `linear-gradient(90deg, ${props.color} 0%, #FFFF 50%)`;
    }, [props.keyE, props.color]);

    //Poner colores a cada propiedad
    useEffect(() => {

        const categorias = {
            "aficionados": 1, "aficionados por satélite": 1, "radioaficionados": 1, "radioaficionados por satélite": 1, "radioaficionados por satélite (espacio-tierra)": 1, "entre satélites": 2, "exploración de la tierra por satélite": 3, "exploración de la tierra por satélite (activo)": 3, "exploración de la tierra por satélite (espacio-tierra)": 3, "exploración de la tierra por satélite (espacio-tierra)(espacio-espacio)": 3, "exploración de la tierra por satélite (pasivo)": 3, "exploración de la tierra por satélite (tierra-espacio)": 3, "exploración de la tierra por satélite (tierra-espacio)(espacio-espacio)": 3, "fijo": 4, "fijo aeronáutico": 4, "fijo por satélite": 4, "fijo por satélite (espacio-tierra)": 4, "fijo por satélite (espacio-tierra)(tierra-espacio)": 4, "fijo por satélite (tierra-espacio)": 4, "fijo por satélite (tierra-espacio)(espacio-tierra)": 4, "frecuencia patrón y señales horarias por satélite (400,1 mhz)": 5, "frecuencias patrón y señales horarias": 5, "frecuencias patrón y señales horarias (10 000 khz)": 5, "frecuencias patrón y señales horarias (15 000 khz)": 5, "frecuencias patrón y señales horarias (2 500 khz)": 5, "frecuencias patrón y señales horarias (20 000 khz)": 5, "frecuencias patrón y señales horarias (20 khz)": 5, "frecuencias patrón y señales horarias (25 000 khz)": 5, "frecuencias patrón y señales horarias (5 000 khz)": 5, "frecuencias patrón y señales horarias por satélite (espacio-tierra)": 5, "frecuencias patrón y señales horarias por satélite (tierra-espacio)": 5, "investigación espacial": 6, "investigación espacial (activo)": 6, "investigación espacial (espacio lejano)": 6, "investigación espacial (espacio lejano)(espacio-tierra)": 6, "investigación espacial (espacio lejano)(tierra-espacio)": 6, "investigación espacial (espacio-tierra)": 6, "investigación espacial (espacio-tierra)(espacio-espacio)": 6, "investigación espacial (pasivo)": 6, "investigación espacial (tierra-espacio)": 6, "investigación espacial (tierra-espacio)(espacio-espacio)": 6, "radioastronomía": 6, "ayudas a la meteorología": 7, "meteorología por satélite (espacio-tierra)": 7, "meteorología por satélite (tierra-espacio)": 7, "móvil": 8, "móvil (socorro y llamada)": 8, "móvil aeronáutico": 8, "móvil aeronáutico (or)": 8, "móvil aeronáutico (r)": 8, "móvil marítimo": 8, "móvil marítimo (socorro y llamada)": 8, "móvil por satélite": 8, "móvil por satélite (espacio-tierra)": 8, "móvil por satélite (tierra-espacio)": 8, "móvil por satélite salvo móvil aeronáutico por satélite (tierra-espacio)": 8, "móvil salvo móvil aeronáutico": 8, "móvil salvo móvil aeronáutico (r)": 8, "móvil terrestre": 8, "móvil terrestre por satélite (tierra-espacio)": 8, "no atribuida": 9, "operaciones espaciales (espacio-tierra)": 10, "operaciones espaciales (espacio-tierra)(espacio-espacio)": 10, "operaciones espaciales (identificación por satélites)": 10, "operaciones espaciales (tierra-espacio)": 10, "operaciones espaciales (tierra-espacio)(espacio-espacio)": 10, "radiodeterminación": 11, "radiodeterminación por satélite (tierra-espacio)": 11, "radiodifusión": 12, "radiodifusión por satélite": 12, "radiolocalización": 13, "radiolocalización por satélite (tierra-espacio)": 13, "radionavegación": 14, "radionavegación aeronáutica": 14, "radionavegación marítima": 14, "radionavegación marítima (radiofaros)": 14, "radionavegación por satélite": 14, "radionavegación por satélite (espacio-tierra)": 14, "radionavegación por satélite (espacio-tierra) (espacio-espacio)": 14, "radionavegación por satélite (tierra-espacio)": 14, "radionavegación por satélite (tierra-espacio)(espacio-espacio)": 14
        }
        const propiedades = document.querySelectorAll('.propiedad');
        const colorScale = ["#B0D9D5", "#4BA4F2", "#E9C9F2", "#F2E399", "#E2FFE3", "#E8F496", "#A3FFE3", "#FFE2E2", "#F9F9F9", "#E893F5", "#F5CDC3", "#D7DCC3", "#F5DEA3", "#E1F6FF"]

        propiedades.forEach((propiedad) => {
            const primerHijoParrafo = propiedad.querySelector('p:first-child');
            const contenidoParrafo = primerHijoParrafo.textContent.toLowerCase().trim();
            const color = categorias[contenidoParrafo];

            if (color !== undefined) {
                propiedad.style.backgroundColor = colorScale[color - 1]
            }
        });

    }, []);
    const [modalData, setModalData] = useState({ nameData: null, inicio: null, final: null });
    const [show, setShow] = useState(false);
    const handleShow = (valor, inicio, final) => {
        setModalData({ valor, inicio, final });
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <AccordionItem eventKey={props.keyE} >
            <AccordionHeader>
                <div id={`frecuencia ${props.keyE}`} className='accordion_header'>
                    <div className='imagen-header_container'>
                        <img style={{ width: "100%", maxHeight: "80px" }} src={require(`../IconsComponent/${props.imagen}.svg`)} alt={`Icono de + ${props.imagen}`} />
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
                                    <div key={subindex} onClick={() => handleShow(`${props.data[2]}: ${valor}`, propiedad.inicio, propiedad.final)} className='multicolumn-propiedad propiedad' style={{ width: `calc(100% / ${propiedad.Sprimario.length})`, height: `${Math.log10(propiedad.final - propiedad.inicio) * 15 + 20}px` }}>
                                        <p className='propiedad-text'>{valor}</p>
                                        <p className="propiedad-text">{`${propiedad.inicio}-${propiedad.final} Hz`}</p>
                                    </div>
                                ))
                            ) : (
                                <div onClick={() => handleShow(`${props.data[2]}: ${propiedad.Sprimario[0]}`, propiedad.inicio, propiedad.final)} className="unique-propiedad propiedad" style={{ height: `${Math.log10(propiedad.final - propiedad.inicio) * 15 + 20}px` }}>
                                    <p className='propiedad-text'>{propiedad.Sprimario[0]}</p>
                                    <p className="propiedad-text">{`${propiedad.inicio}-${propiedad.final} Hz`}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </AccordionBody>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1 className='titleModal'>{modalData.valor}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Inicio: {modalData.inicio} - Final: {modalData.final} Hz</p>
                <p>Aquí debería ir la descripción</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </AccordionItem>
    );
}

export default RangoFrecuencia;