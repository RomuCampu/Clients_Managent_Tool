import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  createClientReducer,
  readClientReducer,
  readAllClientsReducer,
  updateClientReducer,
  deleteClientReducer
} from './reducers/clientReducer'


const reducer = combineReducers({
  createClient: createClientReducer,
  readClient: readClientReducer,
  readClients: readAllClientsReducer,
  updateClient: updateClientReducer,
  deleteClient: deleteClientReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store