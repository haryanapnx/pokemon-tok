import React from 'react';
import { Modal, Badge, ListGroup, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { modalToggleReset } from 'redux/actions';
import { isEmpty } from 'commons/utills'

const Modals = () => {
   const dispatch = useDispatch()
   const { isOpen, size, title } = useSelector(state => state.modal)
   const { detailPokemon } = useSelector(state => state.pokemon)

   const toggle = () => {
      dispatch(modalToggleReset());
   }

   return (
      <Modal size={size} show={isOpen} onHide={toggle}>
         <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {
               !isEmpty(detailPokemon) && (
                  <>
                     <img width='100%' className='shadow' src={detailPokemon.sprites.front_default} alt='img-preview' />
                     <h2 align='center' style={{ marginTop: '-2em' }}>
                        <Badge variant="dark">{detailPokemon.name}</Badge>
                     </h2>
                     <Row>
                        <Col md={6}>
                           <ListGroup as="ul">
                              <ListGroup.Item as="li" variant="dark"> Species </ListGroup.Item>
                              <ListGroup.Item as="li">{detailPokemon.species.name}</ListGroup.Item>
                              <ListGroup.Item as="li" variant="dark"> Height </ListGroup.Item>
                              <ListGroup.Item as="li">{detailPokemon.height}</ListGroup.Item>
                              <ListGroup.Item as="li" variant="dark"> Weight </ListGroup.Item>
                              <ListGroup.Item as="li">{detailPokemon.weight}</ListGroup.Item>
                              <ListGroup.Item as="li" variant="dark"> Base Experience </ListGroup.Item>
                              <ListGroup.Item as="li">{detailPokemon.base_experience}</ListGroup.Item>
                           </ListGroup>
                        </Col>
                        <Col md={6}>
                           <ListGroup as="ul">
                              <ListGroup.Item as="li" variant="dark"> Types </ListGroup.Item>
                              {detailPokemon.types.map(({ type }, i) => (
                                 <ListGroup.Item key={i} as="li">{type.name}</ListGroup.Item>
                              ))}
                           </ListGroup>
                           <ListGroup as="ul">
                              <ListGroup.Item variant="dark" as="li">Base Stats</ListGroup.Item>
                              {detailPokemon.stats.map(({ stat, base_stat }, i) => (
                                 <ListGroup.Item key={i} as="li">{stat.name}: {base_stat}</ListGroup.Item>
                              ))}
                           </ListGroup>
                        </Col>
                     </Row>
                  </>
               )}
         </Modal.Body>
      </Modal>
   );
}

export default Modals;