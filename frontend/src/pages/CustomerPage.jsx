import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Tooltip, OverlayTrigger, Nav } from 'react-bootstrap'
import { HeaderTwo } from '../components/HeaderTwo';
import './customers.css'

export const CustomerPage = ({ match }) => {

  const [client, setClient] = useState({})
  const [contact_person, setContactPerson] = useState({})
  const [clientDetails, setClientDetails] = useState()

  const history = useHistory()

  useEffect(() => {
    const setClientData = async () => {
      await axios.get(`http://localhost:5000/api/clients/profile/${match.params.id}`)
        .then(response => {
          setClient(response.data)
          setContactPerson(response.data.contact_person)
          setClientDetails(response.data.clientDetails)
        })
    }

    setClientData()
  }, [match])

  const handleClickEvent = () => {
    history.push('/dashboard')
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <HeaderTwo value={clientDetails ? clientDetails.header : ''} />

        <div className="text-center mb-5">
          <blockquote className="text-center h5 text-area">{clientDetails ? clientDetails.content : ''}</blockquote>
        </div>
      </div>


      <Container className="jumbo-container">

        <div className="client-details">
          <h5 className='text-center'>Customer details</h5>
          <p>Name: <span>{client.businessName}</span></p>
          <p>Website: <span>{client.website}</span></p>
          <p>Country: <span> {client.country}</span></p>
          <p>Address: <span> {client.address}</span></p>
          <p>Email: <span> {client.email}</span></p>
          <p>Product: <span> {client.product}</span></p>
        </div>
        {/*  */}
        <div className="icon-wrapper">
          <OverlayTrigger key='top-1' placement='top' overlay={
            <Tooltip id={`tooltip-${'top'}`}>Edit</Tooltip>}>
            <LinkContainer to={`/edit-form/${match.params.id}`}>
              <Nav.Link><i className="fas fa-edit" style={{ fontSize: "30px", marginLeft: "-5px" }}></i></Nav.Link>
            </LinkContainer>
          </OverlayTrigger>

          <OverlayTrigger key='top-2' placement='top' overlay={
            <Tooltip id={`tooltip-${'top'}`}>Go Back</Tooltip>}>
            <i className="fa fa-angle-double-left  mt-5" style={{ fontSize: "36px" }} onClick={handleClickEvent}></i>
          </OverlayTrigger>

          <OverlayTrigger key='top-3' placement='top' overlay={
            <Tooltip id={`tooltip-${'top'}`}>Delete</Tooltip>}>
            <i className="far fa-trash-alt mt-5" style={{ fontSize: "32px" }}></i>
          </OverlayTrigger>
        </div>
        {/*  */}
        <div className="contact-details">
          <h5 className='text-center'>Contact Person</h5>
          <p>Name: <span> {contact_person.name}</span></p>
          <p>Email: <span> {contact_person.contact_email}</span></p>
          <p>Phone: <span> {contact_person.phone}</span></p>
          <p>Language: <span> {contact_person.language}</span></p>
        </div>
      </Container>
    </React.Fragment>
  )
}
