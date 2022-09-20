import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

import "./Nabar.css"
export default function Navbars() {
  return (
    <div className='container'>
      
      <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src="image/logo.png" className='siteLogo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Link href="#features" className='nav-link me-md-2' style={{color: 'white', textDecoration: 'none'}}><Link to="/" style={{color: 'white', textDecoration: 'none'}}>About Us</Link></Nav.Link>
            <Nav.Link  className='nav-link me-md-2' style={{color: 'white', textDecoration: 'none'}}><Link to="/buyCoin" style={{color: 'white', textDecoration: 'none'}}>Buy Coin</Link></Nav.Link>
            <Nav.Link href="#pricing" className='nav-link me-md-2' style={{color: 'white', textDecoration: 'none'}}><Link to="/Nft" style={{color: 'white', textDecoration: 'none'}}>NFT</Link></Nav.Link>
            <Nav.Link href="#pricing" className='nav-link me-md-2' style={{color: 'white', textDecoration: 'none'}}><Link to="/NftOpenMarket" style={{color: 'white', textDecoration: 'none'}}>NFT Open Market</Link></Nav.Link>
            <Nav.Link href="#pricing" className='nav-link me-md-2' style={{color: 'white', textDecoration: 'none'}}><Link to="/LPFatming" style={{color: 'white', textDecoration: 'none'}}>L.P Farming</Link></Nav.Link>
            <Nav.Link href="#pricing" className='nav-link me-md-2' style={{color: 'white', textDecoration: 'none'}}><Link to="/Swap_Exchange" style={{color: 'white', textDecoration: 'none'}}>Swap Exchange</Link></Nav.Link>
            <Nav.Link href="#pricing" className='nav-link me-md-2' style={{color: 'white', textDecoration: 'none'}}><Link to="/WonderLand" style={{color: 'white', textDecoration: 'none'}}>Wonder Land</Link></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
