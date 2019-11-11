import React from 'react';
import { connect } from "react-redux";
import { Container } from 'react-bootstrap';
import { Header, Modals, Home } from 'components'
import { isEmpty } from 'commons/utills'
import { getPokemon, getDetailPokemon, modalToggle, getTypePokemon } from 'redux/actions'

class App extends React.PureComponent {
  state = {
    listPokemon: [],
    nextPage: '',
    preview: false,
    img: '',
    listType: [],
    loading: false
  }
  componentDidMount() {
    this.getAllPokemon()
    this.getType()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemon !== this.props.pokemon) {
      const { listPokemon } = this.state
      this.setState({
        listPokemon: listPokemon.concat(this.props.pokemon),
        nextPage: this.handleId(this.props.next, 1)
      })
    }
  }

  handleId = (value, index) => {
    let spl = value.split('/')
    return spl[spl.length - index]
  }

  getType = async (param) => {
    const { dispatch } = this.props
    await dispatch(getTypePokemon(param))
  }

  getAllPokemon = async () => {
    let res = await this.props.dispatch(getPokemon(this.state.nextPage))
    if (!isEmpty(res.data)) {
      const { next } = res.data
      this.setState({ nextPage: this.handleId(next, 1) })
    }
  }

  handleType = async (e) => {
    const { value } = e.target
    this.setState({ listPokemon: [] },
      () => {
        if (value === 'all') {
          this.getAllPokemon()
        } else {
          this.getType(this.handleId(value, 2))
        }
      })
  }

  handleDetail = async (img, id) => {
    const { dispatch, detailPokemon } = this.props
    await dispatch(getDetailPokemon(id))
    dispatch(modalToggle(true, detailPokemon, 'Detail Pokemon ', 'md', img))
  }

  render() {
    const { isLoading, types } = this.props
    const { img, listPokemon } = this.state

    return (
      <>
        <Header />
        <Container style={{ marginTop: '-10em' }}>
          <h1 style={{ color: 'white', zIndex: 4 }}>Pokedex Arena</h1>
          <Home
            isLoading={isLoading}
            types={types}
            handleType={this.handleType}
            handleId={this.handleId}
            getAllPokemon={this.getAllPokemon}
            handleDetail={this.handleDetail}
            img={img}
            listPokemon={listPokemon}
          />
        </Container>
        <Modals />
      </>
    );
  }
}

const mapState = (state) => {
  const { pokemon, isLoading, next, detailPokemon, types } = state.pokemon
  return { pokemon, isLoading, next, detailPokemon, types }
}
const action = dispatch => ({ dispatch })

export default connect(mapState, action)(App);