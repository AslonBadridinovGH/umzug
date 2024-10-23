import React, { useRef, useState } from 'react';
import emailjs, { send } from "@emailjs/browser";
import styled from "styled-components";
import { text } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// npm i @emailjs/browser

const serviceId = "service_5y9l5yg";
const templateId = "template_5u4vne4";
const publicId = "r-7OMGIk2nXypaiGP";


export default function Beiladung() {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setPhone] = useState("");
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [ort, setOrt] = useState("");
    const [message, setMessage] = useState("");


    const form = useRef();

    const sendEmail = (e) => {
 
       e.preventDefault();
 
       emailjs
             .sendForm(serviceId, templateId, form.current, publicId)
             .then(
                     (result) => {
                       console.log(result.text);
 
                       alert("Ihre Nachricht wurde versandt. Wir werden, so schnell wie möglich, auf Sie zukommen. Vielen Dank")
                       
                       setFirstName("");
                       setLastName("");
                       setEmail("");
                       setPhone("");
                       setDate1("");
                       setDate2("");
                       setOrt("");
                       setMessage("");
                     },
                     (error) => {
                       console.log(error.text);
                     }
             );
 
   };

  return (

     <div className='mb-1 mt-5'>
            
        <section className="container">
            <div className="row">
                <div className="col-12">

                    <div className="mb-3 text-center">
                        <h2 className="h2">Beiladungsanfrage</h2>
                    </div>

                    <div className="mb-3 text-center fs-4">
                        <p>
                           Wir haben regelmäßige Fahrten in verschiedenste Großstädte in ganz Deutschland. 
                           Senden Sie uns unverbindlich eine Beiladungsanfrage und wir melden uns 
                           schnellstmöglich mit einem Angebot und einem möglichen Termin bei Ihnen zurück.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <section className="container">
            <div class="row">
                <div class="col-12">
                    <div class="p-4 border rounded">

                        <form method="post" ref={form} onSubmit={sendEmail}>

                            <div class="mb-3">
                                <label  className="form-label">Name<span class="text-danger">*</span></label>
                                <div class="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="text"  className="form-control" name="user_firstname" 
                                                            onChange={(e)=>{setFirstName(e.target.value)}} 
                                                            value={firstname} placeholder="Vorname" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text"  className="form-control" name="user_lastname" 
                                                            onChange={(e)=>{setLastName(e.target.value)}} 
                                                            value={lastname}  placeholder="Nachname" />
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label className="form-label">E-Mail <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" name='user_email' placeholder='E-Mail Adresse'
                                                    onChange={(e)=>{setEmail(e.target.value)}} 
                                                    value={email} required />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Telefonnummer</label>
                                <input type="text" className="form-control" name='user_phone'
                                                   onChange={(e)=>{setPhone(e.target.value)}} 
                                                   value={telephone} placeholder='Telefonnummer'/>
                            </div>

                            <div class="mb-3">
                                <label className="form-label">Datum oder gewünschter Zeitraum <span class="text-danger">*</span></label>
                                <div className='d-flex gap-3'>
                                    <input type="date" className="form-control" name='user_date1'
                                                   onChange={(e)=>{setDate1(e.target.value)}} 
                                                   value={date1} placeholder="" required/>

                                    <input type="date" className="form-control" name='user_date2'
                                                   onChange={(e)=>{setDate2(e.target.value)}} 
                                                   value={date2} placeholder="" required/>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label className="form-label">Von wo nach wo soll Ihre Beiladung versendet werden?<span class="text-danger">*</span></label>
                                <textarea   className="form-control" rows="3" name='user_ort'
                                            onChange={(e)=>{setOrt(e.target.value)}} 
                                            value={ort} required/>
                                
                                {/* <div className="invalid-feedback">Dieses Feld ist erforderlich.</div> */}
                            </div>

                            <div class="mb-3">
                                <label className="form-label">Was soll versendet werden? (Bitte Maße und ungefähres Gewicht angeben) <span class="text-danger">*</span></label>
                                <textarea className="form-control" rows="3" name='user_message'
                                          onChange={(e)=>{setMessage(e.target.value)}} 
                                          value={message}
                                          required/>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Absenden</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </section>

     </div>

  )
}
