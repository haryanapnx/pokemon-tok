import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { Loader } from 'components'
import { isEmpty } from 'commons/utills'
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = (props) => {
   const { isLoading, types, handleType, handleId, getAllPokemon, handleDetail, img, listPokemon } = props

   return (
      <Card>
         <Card.Body>
            <Form.Group controlId="exampleForm.ControlSelect1">
               <Form.Label>Filter by</Form.Label>
               <Form.Control onChange={handleType} as="select">
                  <option value='all'>All type</option>
                  {!isEmpty(types) &&
                     types.map(({ name, url }, id) => (
                        <option key={id} value={url}>{name}</option>
                     ))
                  }
               </Form.Control>
            </Form.Group>
            {isLoading && <Loader />}
            <InfiniteScroll
               next={getAllPokemon}
               dataLength={listPokemon.length}
               hasMore={!isLoading}
               loader={<Loader />}
            >
               <Row>
                  {
                     !isEmpty(listPokemon) && listPokemon.map(({ name, url }, idx) => {
                        let urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${handleId(url, 2)}.png`
                        return (
                           <Col key={idx} md={3} xs={12}>
                              <Card key={idx} align='center' bg="light" style={{ margin: '1em' }} className='on-pointer'>
                                 <Card.Img variant="top" onClick={() => handleDetail(urlImg, handleId(url, 2))} src={urlImg || img} />
                                 <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                 </Card.Body>
                              </Card>
                           </Col>
                        )
                     })
                  }
               </Row>
            </InfiniteScroll>
         </Card.Body>
      </Card>
   );
}

export default Home;