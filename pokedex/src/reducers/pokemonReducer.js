export const initialState = null

export const pokemonReducer = (state, action) => {
  if (action.type === 'POKEMON') {
    return action.payload
  }
  return state
}