import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';
import "./index.scss"

export default function Header() {
  return (

        <Container fluid >

                   <div className='d-flex justify-content-between bg-secondary px-2'>    

                        <Navbar.Brand href="#home">
                            <img src="https://cdn-icons-png.flaticon.com/512/4950/4950831.png" 
                            width="120" height="70" alt="logo"/>
                        </Navbar.Brand>  

                        <Navbar expand="lg" className='d-flex justify-content-end'>

                            <div className="d-flex gap-1">

                                <div href="#" className="d-none d-sm-flex gap-2 d-lg-none text-decoration-none fw-bold text-dark">
                                    <span className='mt-2 mx-2'>Menü</span> 
                                </div>

                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                            </div> 

                            <Navbar.Collapse  id="basic-navbar-nav" 
                                                className="mt-2 text-center">

                                <Nav className="me-auto" id='navId'>

                                    <NavLink to="/home" className='fs-5 fw-bold'
                                        
                                        style={({isActive})=>( isActive? {
                                            backgroundColor : "blue",
                                            padding: "5px"
                                        } : {} )}
                                    >
                                        Home
                                    </NavLink>

                                    <NavLink to="/leistung" className='fs-5 fw-bold'
                                        
                                        style={({isActive})=>( isActive? {
                                            backgroundColor : "blue",
                                            padding: "5px"
                                        } : {} )}
                                    >
                                        Leistung
                                    </NavLink>

                                    <NavLink to="/ablauf" className='fs-5 fw-bold '
                                        style={({isActive})=>( isActive? {
                                            backgroundColor : "blue",
                                            padding: "5px"
                                        } : {} )}
                                        >
                                        Ablauf
                                    </NavLink>

                                    <NavLink to="/ContactEmail" className='fs-5 fw-bold'
                                        style={({isActive})=>( isActive? {
                                            backgroundColor : "blue",
                                            padding: "5px"
                                        } : {} )}
                                        >
                                        Beiladung
                                    </NavLink>

                                    <NavLink to="/contact" className='fs-5 fw-bold '
                                    
                                        style={({isActive})=>( isActive? {
                                            backgroundColor : "blue",
                                            padding: "5px"
                                        } : {} )}
                                    >
                                        Kontakt
                                    </NavLink>
                                    {/* <Nav.Link href="http://becke-transport.de/#Leistungen">Leistungen</Nav.Link> */}
                                
                                </Nav>

                            </Navbar.Collapse>
                        
                        </Navbar>

                   </div>

                    <div>
                        <Outlet></Outlet>
                    </div>

        </Container>
        
  )
}
