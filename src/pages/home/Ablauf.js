import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faHandsHelping, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Ablauf() {
  return (

     <section class="container py-5">
        <div class="row">

            <div className='text-center mb-4'>
                 <h2>Ablauf</h2>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="text-center">
                    <FontAwesomeIcon icon={faPhone} size='2x' color='red' aria-hidden className='mb-3'/>
                    <p className='fs-4'>Sie kontaktieren uns mit den Informationen zu Ihrem Umzug oder anderen Dienstleistungen.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="text-center">
                    <FontAwesomeIcon icon={faClipboardList} size='2x' color='red' aria-hidden={true} className='mb-3'/> 
                    <p className='fs-4'>Sie erhalten umgehend ein Angebot von uns.</p>
                </div>
            </div>
    
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="text-center">
                    <FontAwesomeIcon icon={faHandsHelping} size='2x' color='red' aria-hidden="true" className='mb-3' />
                    <p className='fs-4'>Wir kümmern uns um Ihr Anliegen.</p>
                </div>
            </div>
            
        </div>
     </section>
  )
}
