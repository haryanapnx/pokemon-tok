import { combineReducers } from 'redux';
import pokelistReducer from './pokemonReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
   pokemon: pokelistReducer,
   modal: modalReducer
});

export default rootReducer;