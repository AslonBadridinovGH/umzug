import React from 'react'
import { Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import "./index.scss"



export default function PhoneWhatsApp() {
  return (

      <section class="phoneWhatsApp container-fluid d-flex justify-content-end">

          <div class="row justify-content-center flex-column">

              <div className="col-auto">

                  <a href="tel:+491793229358" 
                      className="btn btn-danger rounded d-flex align-items-center justify-content-center" 
                      target="_blank" style= {{backgroundColor: "aqua", width: "60px", height: "60px", opacity:0.4 }}>
                      <FontAwesomeIcon icon={faPhone} size='2x' color='dark' />
          
                      <span class="visually-hidden">Phone</span>
                  </a>
              </div>

              <div class="col-auto">
                  <a href="https://wa.me/+491793229358" 
                    className="btn btn-danger  d-flex align-items-center justify-content-center" 
                    target="_blank" style={{backgroundColor: "aqua", width: "60px", height: "60px", opacity:0.4}}>
                      
                      <FontAwesomeIcon icon={faWhatsapp} size='3x' color='dark'/>
                      <span class="visually-hidden">WhatsApp</span>
                  </a>
                
              </div>

          </div>

      </section>

  )
}
