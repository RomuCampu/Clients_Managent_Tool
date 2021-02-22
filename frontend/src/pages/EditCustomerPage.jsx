import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { InputFieldComponent } from '../components/InputFieldComponent'
import { HeaderTwo } from '../components/HeaderTwo'
import { Form } from 'react-bootstrap'
import { TextArea } from '../components/TextArea'
import CustomButton from '../components/CustomButton'
import './form-page.css'



const useFetchedData = (match) => {
  const [fetchedData, setFetchedData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/clients/profile/${match.params.id}`)
        .then(res => setFetchedData(res.data))
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [match])
  return fetchedData
}

export const EditCustomerPage = ({ match }) => {

  const data = useFetchedData(match);

  const [client, setClient] = useState({
    clientDetails: '',
    businessName: '',
    country: '',
    address: '',
    website: '',
    email: '',
    product: '',
    contact_person: ''
  })

  useEffect(() => {
    setClient(data)
  }, [data])

  console.log(client);

  const history = useHistory()

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

  const {
    clientDetails,
    businessName,
    country,
    address,
    website,
    email,
    product,
    contact_person
  } = client

  const handleSubmit = async (event) => {
    event.preventDefault()

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
            value={client.clientDetails && client.clientDetails.header}
            onChange={handleClientDetails}
            label="Offer"
            required
          />

          <TextArea
            name="content"
            type="text"
            value={client.clientDetails && client.clientDetails.content}
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
              value={client.contact_person && client.contact_person.name}
              onChange={handleContactDetails}
              label="Name"
              required
            />

            <InputFieldComponent
              name="contact_email"
              type="email"
              value={client.contact_person && client.contact_person.contact_email}
              onChange={handleContactDetails}
              label="Email"
              required
            />

            <InputFieldComponent
              name="phone"
              type="text"
              value={client.contact_person && client.contact_person.phone}
              onChange={handleContactDetails}
              label="Phone"
              required
            />

            <InputFieldComponent
              name="language"
              type="text"
              value={client.contact_person && client.contact_person.language}
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
