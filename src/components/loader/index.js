import React from 'react';
import { Spinner, Col } from 'react-bootstrap';

const Loader = () => {
   return (
      <Col md={12} align='center' style={{height:'100vw'}}>
         <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
         </Spinner>
      </Col>
   );
}

export default Loader;


