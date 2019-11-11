import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
   return (
      <Jumbotron className='header' id='header-shape'>
         <Container>
            <Row noGutters>
               <Col md={3} style={{paddingTop:'2em'}}>
                  <h1 className='text-shadow' style={{ color: 'white' }}>Pokedex Arena</h1>
               </Col>
               <Col md={1}>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' alt='header' />
               </Col>
               <Col md={8}/>
            </Row>
         </Container>
      </Jumbotron>
   );
}

export default Header;