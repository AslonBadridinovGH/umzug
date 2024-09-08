import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faHandsHelping, faPhone } from '@fortawesome/free-solid-svg-icons';
import Header from '../navbar';
import Ablauf from './Ablauf';
import Contact from '../contact';
import PhoneWhatsApp from '../phonewhat';
import ContactEmail from '../beiladung/contact';


export default function Home() {
  return (
     <section class="container">
        <div class="row">
   
            <Ablauf/> 
            <Contact/>  
            <PhoneWhatsApp />
            <ContactEmail /> 

        </div>
     </section>
  )
}
