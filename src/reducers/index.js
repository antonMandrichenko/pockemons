import { combineReducers } from 'redux'
import getPockemons from './getPockemons'
import getPockemon from './getPockemon'

export default combineReducers({
  getPockemons,
  getPockemon
})
