import * as types from './actionTypes';
import { apiCall } from 'commons/apiCall'
import { isEmpty } from 'commons/utills'

export const setLoading = (loading) => {
   return { type: types.POKEMON_LOADING, bool: loading }
}

export const getPokemon = (url) => async dispatch => {
   dispatch(setLoading(true))
   const res = await apiCall(`pokemon/${url}`);
   if (res) {
      const { results, next } = res.data
      let param = next.split('/')
      dispatch({ type: types.GET_POKEMON, results, next: param[param.length - 1] });
   }
   dispatch(setLoading(false))
   return res
}

export const getDetailPokemon = (id) => async dispatch => {
   dispatch(setLoading(true))
   const res = await apiCall(`pokemon/${id}`);
   if (res) {
      const { data } = res
      dispatch({ type: types.GET_DETAIL_POKEMON, data });
   }
   dispatch(setLoading(false))
   return res
}

export const getTypePokemon = (id = '') => async dispatch => {
   dispatch(setLoading(true))
   const res = await apiCall(`type/${id}`);
   if (res) {
      const { data } = res
      if (!isEmpty(id)) {
         let newPokemon = []
         data.pokemon.map(item => (
            newPokemon.push(item.pokemon)
         ))
         dispatch({ type: types.GET_POKEMON, results: newPokemon, next: uri });
      } else {
         dispatch({ type: types.POKEMON_TYPE, types: data.results });
      }
   }
   dispatch(setLoading(false))
   return res
}

let uri = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'
