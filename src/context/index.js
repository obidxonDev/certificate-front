import { combineReducers } from 'redux'
import admin from './admin'

const rootReducer = combineReducers({  
   water: () => "Redux",
   admin
})

export default rootReducer