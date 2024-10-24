import React from 'react';
import { Link } from 'react-router-dom';
import mers from "../home/photo/mers1.jpg";
import "./leistung.scss"

export default function Leistung() {
  return (

    <div className='container py-5'>
        
        <div className="row text-center d-flex flex-column gap-2">
             
              <h1>TURAN Umzug – auf uns ist Verlass!</h1>
              
              <p className='fs-5 mt-3'>      
                Mit über 4 Jahren Erfahrung sind wir Profis auf unserem Gebiet und Zuverlässigkeit
                ist uns genau so wichtig wie Pünktlichkeit und gegenseitiges Vertrauen.
                Wir bieten Ihnen folgende Dienstleistungen zu günstigen Preisen:
              </p> 
              
              <div className='fs-5'>
                 <p>– Umzüge / Möbelmontage (Ab- und Aufbau jeglicher Möbel)</p>
                 <p>– Entrümpelung</p>
                 <p>– Wohnungsräumung</p>
                 <p>– Haushaltsauflösung</p>
                 <p>– Kellerräumung</p>
                 <p>– Schrottentsorgung</p>
                 <p>– Müllentsorgung</p>
                 <p>-Lampenmontage</p>
                 <p>– Transporte von A nach B</p>
                 <p> Auch Garten- und Baggerarbeiten, 
                     sowie Entkernungen gehören zu unserem Leistungsspektrum.
                  </p>
                  
                  <div className='mt-5'>

                      <h2>Beiladungen</h2>
                      <p>
                          Des weiteren haben wir regelmäßige Fahrten in verschiedenste Großstädte in ganz Deutschland.
                          Senden Sie uns eine unverbindliche Beiladungsanfrage an und wir melden uns schnellstmöglich mit einem Angebot und einem möglichen Termin zurück.
                      </p>

                      <div className='btn btn-danger py-2 mt-4 px-5 fw-bold fs-4 text-black'>
                            <Link to="/contactEmail" className='text-decoration-none'>
                                 Beiladungumfrage
                            </Link>
                      </div>
                  </div>
                 
              </div>

              <div className='mt-5'>
                       
                      <h2 className='mb-5 text-primary fw-bold'>Wir vermieten  Transport</h2>

                      <div className='row col-12'>

                          <div className='col-sm-12 col-md-12 col-lg-6'>

                              <div className='d-flex flex-column'>
                                  <h3>Boxer mit Koffer Aufbau</h3>
                                    <p className='p-0 fs-4'> Laderaum Maße:</p>
                                    <p className='p-0 fs-4'> Laderaum Länge 430</p>
                                    <p className='p-0 fs-4'>  Laderaum Breite 220</p>
                                    <p className='p-0 fs-4'> Laderaum Höhe 215</p>
                                    <p className='p-0 fs-4'>Laderaum Volumen ca. 20 m3</p>
                                    <p className='p-0 fs-4'>
                                        Preis: 100 € inkl. 100 km 
                                    </p>  
                              </div> 
              
                          </div>

                          <div className='mers col-sm-12 col-md-12 col-lg-6'>
                              <img src={mers} alt="mers"/>
                          </div> 

                      </div>
              </div>

        </div>

    </div>

  )
}
