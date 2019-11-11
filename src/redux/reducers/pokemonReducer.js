import * as types from '../actions/actionTypes';

const initialState = {
   pokemon: [],
   detailPokemon:null,
   next: '',
   isLoading: false,
   types:[]
};

const pokelistReducer = (state = initialState, action) => {
   switch (action.type) {

      case types.GET_POKEMON:
         return {
            ...state,
            pokemon:action.results,
            next:action.next,
         };
      case types.GET_DETAIL_POKEMON:
         return {
            ...state,
            detailPokemon:action.data,
         };
      case types.POKEMON_LOADING:
         return {
            ...state,
            isLoading:action.bool,
         };
      case types.POKEMON_TYPE:
         return {
            ...state,
            types:action.types,
         };

      default:
         return state;
   }

}

export default pokelistReducer;