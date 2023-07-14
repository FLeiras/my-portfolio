import React from 'react'

import country from '../../../src/images/proyecto1.png'
import henrys from '../../../src/images/proyecto2.png'
import chatter from '../../../src/images/proyecto3.png'
import tech from '../../../src/images/proyecto4.png'
import utn from '../../../src/images/proyecto5.png'
import toktik from '../../../src/images/proyecto6.png'

import "./Proyectos.css";

export const Proyectos = () => {
    return (
        <>
            <div id='portfolio'>
                <h3 className="titulo-seccion">MIS PROYECTOS</h3>
                <div className="fila">
                    <div className="proyecto">
                        <div className="overlay">
                            <img src={country} alt="" />
                            <div className="info">
                                <h4>Descripción del Proyecto</h4>
                                <p>Country-App</p>
                            </div>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="overlay">
                            <img src={henrys} alt="" />
                            <div className="info">
                                <h4>Descripción del Proyecto</h4>
                                <p>Henry's</p>
                            </div>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="overlay">
                            <img src={chatter} alt="" />
                            <div className="info">
                                <h4>Descripción del Proyecto</h4>
                                <p>Chatter</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="fila">
                    <div className="proyecto">
                        <div className="overlay">
                            <img src={tech} alt="" />
                            <div className="info">
                                <h4>Descripción del Proyecto</h4>
                                <p>TechPro App</p>
                            </div>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="overlay">
                            <img src={utn} alt="" />
                            <div className="info">
                                <h4>Descripción del Proyecto</h4>
                                <p>UTN Parking</p>
                            </div>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="overlay">
                            <img src={toktik} alt="" />
                            <div className="info">
                                <h4>Descripción del Proyecto</h4>
                                <p>TokTik</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
