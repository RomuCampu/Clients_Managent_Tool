import {
  CREATE_CLIENT_REQUEST,
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_FAIL,
  READ_CLIENT_REQUEST,
  READ_CLIENT_SUCCESS,
  READ_CLIENT_FAIL,
  READ_ALL_CLIENTS_REQUEST,
  READ_ALL_CLIENTS_SUCCESS,
  READ_ALL_CLIENTS_FAIL,
  UPDATE_CLIENT_REQUEST,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAIL,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAIL
} from '../constants/clientConstants'

export const createClientReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CLIENT_REQUEST:
      return { ...state, loading: true }
    case CREATE_CLIENT_SUCCESS:
      return { loading: false, clientInfo: action.payload }
    case CREATE_CLIENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const readClientReducer = (state = { client: {} }, action) => {
  switch (action.type) {
    case READ_CLIENT_REQUEST:
      return { ...state, loading: true }
    case READ_CLIENT_SUCCESS:
      return { loading: false, client: action.payload }
    case READ_CLIENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const readAllClientsReducer = (state = { clients: [] }, action) => {
  switch (action.type) {
    case READ_ALL_CLIENTS_REQUEST:
      return { loading: true, clients: [] }
    case READ_ALL_CLIENTS_SUCCESS:
      return { loading: false, clients: action.payload }
    case READ_ALL_CLIENTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const updateClientReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CLIENT_REQUEST:
      return { ...state, loading: true }
    case UPDATE_CLIENT_SUCCESS:
      return { loading: false, success: true, clientInfo: action.payload }
    case UPDATE_CLIENT_FAIL:
      return { loading: true, error: action.payload }
    default:
      return state
  }
}

export const deleteClientReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CLIENT_REQUEST:
      return { ...state, loading: true }
    case DELETE_CLIENT_SUCCESS:
      return { loading: false, clientInfo: action.payload }
    case DELETE_CLIENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}