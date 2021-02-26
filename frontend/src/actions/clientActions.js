import axios from 'axios'
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

export const createClientAction = (
  clientDetails,
  name,
  wenbsite,
  country,
  address,
  email,
  product,
  contact_details
) => async (dispatch) => {

  try {

    dispatch({
      type: CREATE_CLIENT_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('http://localhost:5000/api/clients/profile/', {
      clientDetails,
      name,
      wenbsite,
      country,
      address,
      email,
      product,
      contact_details
    },
      config)

    dispatch({
      type: CREATE_CLIENT_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_CLIENT_FAIL,
      payload: error.response && error.response.data.message
        ? error.response
        : error.response.data.message
    })
  }
}

export const readClientAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: READ_CLIENT_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.get(`http://localhost:5000/api/clients/profile/${id}`, config)


    dispatch({
      type: READ_CLIENT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: READ_CLIENT_FAIL,
      payload: error.response && error.response.data.message
        ? error.response
        : error.response.data.message
    })
  }
}

export const readAllClientAction = () => async (dispatch) => {
  try {
    dispatch({
      type: READ_ALL_CLIENTS_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.get('http://localhost:5000/api/clients/', config)


    dispatch({
      type: READ_ALL_CLIENTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: READ_ALL_CLIENTS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response
        : error.response.data.message
    })
  }
}

export const updateClientAction = (client) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CLIENT_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.put('http://localhost:5000/api/clients/profile/', client, config)

    dispatch({
      type: UPDATE_CLIENT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: UPDATE_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const deletCLientAction = (id) => async (dispatch) => {
  try {

    dispatch({
      type: DELETE_CLIENT_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.delete(`http://localhost:5000/api/clients/profile/${id}`, config)

    dispatch({
      type: DELETE_CLIENT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: DELETE_CLIENT_FAIL,
      payload: error.data && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }

}