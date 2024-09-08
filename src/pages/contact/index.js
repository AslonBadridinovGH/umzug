import React from 'react'
import { Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'



export default function Contact() {
  return (

    <div class="container-fluid py-5">

        <section class="container py-5 d-flex flex-column gap-5">
 
          <div className="d-flex justify-content-center">
              <h2>Kontaktieren Sie uns!</h2>
          </div>

          <div className="row">

              {/* <!-- Column 1: Phone --> */}
              <div class="col-md-4 text-center">
                <div class="mb-3">
                  <a className="text-decoration-none text-dark" href="tel:017610616066" target="_blank">
                    <FontAwesomeIcon  icon={faPhone} size='3x' border color="red"/>
                  </a>
                </div>
                <div>
                  <p><a href="tel:01793229358" className="text-decoration-none text-dark">01793229358</a></p>
                </div>
              </div>
              

              {/* <!-- Column 2: Email --> */}
              <div class="col-md-4 text-center">
                <div class="mb-3">
                  <a className="text-decoration-none text-dark" href="mailto:becke-transport@web.de">
                    <FontAwesomeIcon  icon={faMailBulk} size='3x' border color="red"/>
                  </a>
                </div>
                <div>
                  <p><a href="mailto:jasur-badalov@web.de" className="text-decoration-none text-dark">jasur-badalov@web.de</a></p>
                </div>
              </div>
              
              {/* <!-- Column 3: Address --> */}
              <div className="col-md-4 text-center ">
                <div class="mb-3">
                  <FontAwesomeIcon  icon={faAddressCard} size='3x' border color="red"/>
                </div>
                <div className='d-flex text-center justify-content-center'>
                  <p className=''>straße 1</p>
                  <p className=''>70565 Stuttgart</p>
                </div>
              </div>
          </div>

        </section>
      
    </div>

  )
}
