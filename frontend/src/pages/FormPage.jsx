import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { InputFieldComponent } from '../components/InputFieldComponent'
import { HeaderTwo } from '../components/HeaderTwo'
import { Form } from 'react-bootstrap'
import { TextArea } from '../components/TextArea'
import CustomButton from '../components/CustomButton'
import './form-page.css'

export const FormPage = () => {

  const history = useHistory()

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

    console.log(client);

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
      await axios.post('http://localhost:5000/api/clients/register', body, config)
    } catch (err) {
      console.log(err);
    }

    history.push('/dashboard')
  }

  return (
    <React.Fragment>

      <Form onSubmit={handleSubmit}>
        <div className="form-wrapper">

          <HeaderTwo value='Enter Client Description' />

          <InputFieldComponent
            name="header"
            type="text"
            value={details.header}
            handleChange={handleClientDetails}
            label="Offer"
            required
          />

          <TextArea
            name="content"
            type="text"
            value={details.content}
            handleChange={handleClientDetails}
            // label="Description"
            required
          />

          <HeaderTwo value='Customer Details' />
          <div className="client-side ">

            <InputFieldComponent
              name="businessName"
              type="text"
              value={client.businessName}
              handleChange={handleClient}
              label="Business Name"
              required
            />

            <InputFieldComponent
              name="country"
              type="text"
              value={client.country}
              handleChange={handleClient}
              label="Country"
              required
            />

            <InputFieldComponent
              name="address"
              type="text"
              value={client.address}
              handleChange={handleClient}
              label="Address"
              required
            />

            <InputFieldComponent
              name="website"
              type="text"
              value={client.website}
              handleChange={handleClient}
              label="Website"
              required
            />

            <InputFieldComponent
              name="email"
              type="email"
              value={client.email}
              handleChange={handleClient}
              label="Email"
              required
            />

            <InputFieldComponent
              name="product"
              type="text"
              value={client.product}
              handleChange={handleClient}
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
              value={contact.name}
              handleChange={handleContactDetails}
              label="Name"
              required
            />

            <InputFieldComponent
              name="contact_email"
              type="email"
              value={contact.contact_email}
              handleChange={handleContactDetails}
              label="Email"
              required
            />

            <InputFieldComponent
              name="phone"
              type="text"
              value={contact.phone}
              handleChange={handleContactDetails}
              label="Phone"
              required
            />

            <InputFieldComponent
              name="language"
              type="text"
              value={contact.language}
              handleChange={handleContactDetails}
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
