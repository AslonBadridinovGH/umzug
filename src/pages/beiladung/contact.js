import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import styled from "styled-components";
import { text } from "@fortawesome/fontawesome-svg-core";
// npm i @emailjs/browser

const serviceId = "service_5y9l5yg";
const templateId = "template_5u4vne4";
const publicId = "r-7OMGIk2nXypaiGP";


const ContactEmail = () => {

  const [txt, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");


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
                      setEmail("");
                      setMsg("");

                    },
                    (error) => {
                      console.log(error.text);
                    }
            );

  };

  return (
    <StyledContactForm>
  
            <form ref={form} onSubmit={sendEmail}>

                   <div>
                       <label className="form-label">Name</label> 
                       <input onChange={(e)=>{setFirstName(e.target.value)}} 
                              value={txt} type="text" name="user_name" className="form-control" />
                   </div>
                  
                    <div>
                      <label className="form-label">Email</label>
                      <input onChange={(e)=>{setEmail(e.target.value)}} 
                               value={email} type="email" name="user_email" className="form-control"/>
                    </div>

                    <div>    
                      <label className="form-label">Message</label>
                      <textarea onChange={(e)=>{setMsg(e.target.value)}} 
                               value={msg} typeof="text" name="message" className="form-control"/>       
                    </div>

                    <div>
                      <label htmlFor=""><br /><br /></label>
                      <input type="submit" className="form-label btn-btn-primary" value="Send" /> 
                    </div>
                
            </form>
            
    </StyledContactForm>
  );
};

export default ContactEmail;

  // Styles
  const StyledContactForm = styled.div`

       width: 100%;
       display: flex;
       justify-content: center;

       // margin: 1rem 2rem 10rem 2rem;
       // margin: 1rem 0rem 5rem 0;

      
          form {
              width: 100%;

              display: flex;
              flex-direction: column;
              font-size: 16px;
              /* background-color: blue; */
              
            input {
                width: 100%;
                height: 50px;
                padding: 7px;
                outline: none;
                border-radius: 5px;
                border: 1px solid rgb(220, 220, 220);

                &:focus {
                    border: 2px solid rgba(0, 206, 158, 1);
                }
              } 

              textarea {
                max-width: 100%;
                min-width: 100%;
                width: 100%;
                max-height: 100px;
                min-height: 100px;
                padding: 7px;
                outline: none;
                border-radius: 5px;
                border: 1px solid rgb(220, 220, 220);

              &:focus {
                  border: 2px solid rgba(0, 206, 158, 1);
              }
              }

              label {
                margin-top: 1rem;
              } 

              /* input[type="submit"] {
                margin-top: 2rem;
                cursor: pointer;
                background: rgb(249, 105, 14);
                color: white;
                border: none;
              }  */

          }
      
  `;