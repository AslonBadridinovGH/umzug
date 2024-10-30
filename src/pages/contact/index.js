import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'



export default function Contact() {
  return (

    <div className="container-fluid mb-1 my-5">

        <section class="container d-flex flex-column gap-5">
 
          <div className="d-flex justify-content-center">
              <h2>Kontaktieren Sie uns!</h2>
          </div>

          <div className="row">

              {/* <!-- Column 1: Phone --> */}
              <div class="col-md-4 text-center">
                <div class="mb-3">
                  <a className="text-decoration-none text-dark" href="tel:+491793229358" target="_blank">
                    <FontAwesomeIcon  icon={faPhone} size='3x' border color="blue"/>
                  </a>
                </div>
                <div>
                  <p><a href="tel:+491793229358" className="text-decoration-none text-dark">+491793229358</a></p>
                </div>
              </div>
              

              {/* <!-- Column 2: Email --> */}
              <div class="col-md-4 text-center">
                <div class="mb-3">
                  <a className="text-decoration-none text-dark" href="mailto:turan.umzug@gmail.com">
                    <FontAwesomeIcon  icon={faMailBulk} size='3x' border color="blue"/>
                  </a>
                </div>
                <div>
                  <p><a href="mailto:turan.umzug@gmail.com" className="text-decoration-none text-dark">turan.umzug@gmail.com</a></p>
                </div>
              </div>
              
              {/* <!-- Column 3: Address --> */}
              <div className="col-md-4 text-center ">
                <div class="mb-3">
                  <FontAwesomeIcon  icon={faAddressCard} size='3x' border color="blue"/>
                </div>
                <div className='d-flex flex-column'>
                  <p className='p-0 m-0'>Schiller Straße 7</p>
                  <p className='p-0 m-2'>74199 Untergruppenbach</p>      
                </div>
              </div>
          </div>

        </section>
      
    </div>

  )
}
