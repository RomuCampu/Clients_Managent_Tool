import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { readClientAction, updateClientAction } from '../actions/clientActions'
import { InputFieldComponent } from '../components/InputFieldComponent'
import { HeaderTwo } from '../components/HeaderTwo'
import { Form } from 'react-bootstrap'
import { TextArea } from '../components/TextArea'
import CustomButton from '../components/CustomButton'
import './form-page.css'

const useFetchedData = (match) => {

  const dispatch = useDispatch()
  const readClient = useSelector(state => state.readClient)


  useEffect(() => {
    dispatch(readClientAction(match.params.id))
  }, [match, dispatch])

  const data = readClient.client;
  return data;

}

export const EditCustomerPage = ({ match }) => {

  const history = useHistory()
  // const dispatch = useDispatch()
  // const client = useSelector(state => state.updateClient)
  const data = useFetchedData(match);

  const [client, setClient] = useState({
    clientDetails: {},
    businessName: '',
    country: '',
    address: '',
    website: '',
    email: '',
    product: '',
    contact_person: {}
  })

  const [details, setClientDetails] = useState({
    header: '',
    content: ''
  })

  const [contact, setContactDetails] = useState({
    name: '',
    contact_email: '',
    phone: '',
    language: ''
  })

  useEffect(() => {

    // dispatch(updateClientAction())
    let isSubscribed = true;
    setClient(data)
    setClientDetails(data.clientDetails)
    setContactDetails(data.contact_person)
    return () => !isSubscribed
  }, [data])

  const handleClientDetails = (event) => {
    setClientDetails(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))

    setClient({
      ...client, 'clientDetails': details
    })
  }

  const handleContactDetails = (event) => {
    setContactDetails(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    }))

    setClient({
      ...client, 'contact_person': contact
    })
  }

  const handleClient = (event) => {
    setClient(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    })
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const updatedClient = {
      clientDetails: {
        header: details.header,
        content: details.content,
      },
      businessName: client.businessName,
      country: client.country,
      address: client.address,
      website: client.website,
      email: client.email,
      product: client.product,
      contact_person: {
        name: contact.name,
        contact_email: contact.contact_email,
        phone: contact.phone,
        language: contact.language,
      }
    }

    const {
      clientDetails,
      businessName,
      country,
      address,
      website,
      email,
      product,
      contact_person
    } = updatedClient


    const body = JSON.stringify({
      clientDetails,
      businessName,
      country,
      address,
      website,
      email,
      product,
      contact_person
    })

    console.log(body);

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      await axios.put(`http://localhost:5000/api/clients/profile/${match.params.id}`, body, config)
    } catch (err) {
      console.log(err);
    }

    history.push('/dashboard')
  }

  return (
    <React.Fragment>

      <Form onSubmit={handleSubmit}>
        <div className="form-wrapper">

          <HeaderTwo value='Edit Client' />

          <InputFieldComponent
            name="header"
            type="text"
            value={details && details.header}
            onChange={handleClientDetails}
            label="Offer"
            required
          />

          <TextArea
            name="content"
            type="text"
            value={details && details.content}
            onChange={handleClientDetails}
            required
          />

          <HeaderTwo value='Customer Details' />
          <div className="client-side ">

            <InputFieldComponent
              name="businessName"
              type="text"
              value={client && client.businessName}
              onChange={handleClient}
              label="Business Name"
              required
            />

            <InputFieldComponent
              name="country"
              type="text"
              value={client && client.country}
              onChange={handleClient}
              label="Country"
              required
            />

            <InputFieldComponent
              name="address"
              type="text"
              value={client && client.address}
              onChange={handleClient}
              label="Address"
              required
            />

            <InputFieldComponent
              name="website"
              type="text"
              value={client && client.website}
              onChange={handleClient}
              label="Website"
              required
            />

            <InputFieldComponent
              name="email"
              type="email"
              value={client && client.email}
              onChange={handleClient}
              label="Email"
              required
            />

            <InputFieldComponent
              name="product"
              type="text"
              value={client && client.product}
              onChange={handleClient}
              label="Product"
              required
            />
          </div>
          {/*  */}
          <div className="contact-side center">
            <HeaderTwo value='Contact Details' />
            <InputFieldComponent
              name="name"
              type="text"
              value={contact && contact.name}
              onChange={handleContactDetails}
              label="Name"
              required
            />

            <InputFieldComponent
              name="contact_email"
              type="email"
              value={contact && contact.contact_email}
              onChange={handleContactDetails}
              label="Email"
              required
            />

            <InputFieldComponent
              name="phone"
              type="text"
              value={contact && contact.phone}
              onChange={handleContactDetails}
              label="Phone"
              required
            />

            <InputFieldComponent
              name="language"
              type="text"
              value={contact && contact.language}
              onChange={handleContactDetails}
              label="Language"
              required
            />
          </div>
          {/*  */}
          <div className="btn-wrapper mb-5">
            <CustomButton type='submit'>
              Submit
            </CustomButton>
          </div>
        </div>
      </Form>
    </React.Fragment>
  )
}
