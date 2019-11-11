import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Header, Loader, Modals } from 'components'
import { apiCall } from 'commons/apiCall'
import { isEmpty } from 'commons/utills'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPokemon } from 'redux/actions'

const App = () => {
  const dispatch = useDispatch()
  const {isLoading, pokemon, next} = useSelector(state=>state.pokemon)

  const [nextPage, setNextPage] = useState('')
  const [listPokemon, setListPokemon] = useState([])
  const [preview, setPreview] = useState(false)
  const [img, setImg] = useState('')

  // state = {
  //   pokemon: [],
  //   nextPage: 'pokemon/',
  //   preview: false,
  //   img: '',
  //   type: 'type/',
  //   listType: [],
  //   loading: false
  // }
  useEffect(() => {
    // if (listPokemon!==pokemon) {
    //   setNextPage(next)
    //   setListPokemon(listPokemon.concat(pokemon))
    // }
    getAllPokemon()
  }, [])
  // componentWillMount() {
  //   getPokemon()
  //   getType()
  // }

  // getPokemon = async () => {
  //   const { nextPage, pokemon } = state
  //   const res = await apiCall(nextPage);
  //   if (res) {
  //     const { results, next } = res.data
  //     setState({ pokemon: pokemon.concat(results), nextPage: next })
  //   }
  // }

  const handleId = (value) => {
    let spl = value.split('/')
    return spl[spl.length - 2]
  }

  // setLoading = () => {
  //   setState({ loading: !state.loading })
  // }

  // getType = async (param) => {
  //   setLoading()
  //   let res = await apiCall(state.type)
  //   if (res) {
  //     const { data } = res
  //     if (param) {
  //       let newPokemon = []
  //       data.pokemon.map(item => (
  //         newPokemon.push(item.pokemon)
  //       ))
  //       setState({ pokemon: newPokemon })
  //     } else {
  //       setState({ listType: data.results })
  //     }
  //     setLoading()

  //   }
  // }

  const getAllPokemon = ()=>{
    dispatch(getPokemon(next))
    console.log({nextPage});
    
  }

  const handleType = async (e) => {
    const { value, name } = e.target
    // setState({ type: `type/${handleId(value)}/`, nextPage: 'pokemon/' },
    //   () => {
    //     if (name === 'all') {
    //       getPokemon()
    //     } else {
    //       getType('TYPE')
    //     }
    //   })
  }
  const handlePreview = (img) => {
    setImg(img)
    setPreview(!preview)
  }

    return (
      <>
        <Header />
        <Container>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Filter by</Form.Label>
            <Form.Control onChange={handleType} as="select">
              <option name='all' value='pokemon/'>All type</option>
              {/* {
                listType.map(({ name, url }, id) => (
                  <option key={id} value={url}>{name}</option>
                ))
              } */}
            </Form.Control>
          </Form.Group>
          {/* {loading && <Loader />} */}
          <InfiniteScroll
            next={getAllPokemon}
            dataLength={pokemon.length}
            hasMore={true}
            loader={<Loader />}
          >
            <Row>
              {
                !isEmpty(pokemon) && pokemon.map(({ name, url }, idx) => {
                  let urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${handleId(url)}.png`
                  return (
                    <Col key={idx} md={3} xs={12}>
                      <Card key={idx} align='center' bg="light" style={{ margin: '1em' }} className='on-pointer'>
                        <Card.Img variant="top" onClick={() => handlePreview(urlImg)} src={urlImg || img} />
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
        </Container>
        <Modals handlePreview={handlePreview} isShow={preview} img={img} />
      </>
    );
}

export default App;
