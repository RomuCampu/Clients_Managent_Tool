import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Tooltip, OverlayTrigger, Nav } from 'react-bootstrap'
import { readClientAction } from '../actions/clientActions'
import { HeaderTwo } from '../components/HeaderTwo'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import './customers.css'

export const CustomerPage = ({ match }) => {

  const dispatch = useDispatch()
  const readClient = useSelector(state => state.readClient)
  const { client, error, loading } = readClient
  const history = useHistory()

  useEffect(() => {
    dispatch(readClientAction(match.params.id))
  }, [match, dispatch])

  return (
    <React.Fragment>
      {
        loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
            :
            <div className="wrapper">
              <HeaderTwo value={
                client.clientDetails
                  ? client.clientDetails.header
                  : ''
              } />
              <div className="text-center mb-5">
                <blockquote className="text-center h5 text-area">{
                  client.clientDetails
                    ? client.clientDetails.content
                    : ''
                } </blockquote>
              </div>
            </div>
      }

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

        <div className="icon-wrapper">
          <OverlayTrigger key='top-1' placement='top' overlay={
            <Tooltip id={`tooltip-${'top'}`}>Edit</Tooltip>}>
            <LinkContainer to={`/edit-form/${match.params.id}`}>
              <Nav.Link><i className="fas fa-edit" style={{ fontSize: "30px", marginLeft: "-5px" }}></i></Nav.Link>
            </LinkContainer>
          </OverlayTrigger>
          <OverlayTrigger key='top-2' placement='top' overlay={
            <Tooltip id={`tooltip-${'top'}`}>Go Back</Tooltip>}>
            <i className="fa fa-angle-double-left  mt-5"
              style={{ fontSize: "36px" }} onClick={() => history.push('/dashboard')}></i>
          </OverlayTrigger>
          <OverlayTrigger key='top-3' placement='top' overlay={
            <Tooltip id={`tooltip-${'top'}`}>Delete</Tooltip>}>
            <i className="far fa-trash-alt mt-5" style={{ fontSize: "32px" }}></i>
          </OverlayTrigger>
        </div>

        <div className="contact-details">
          <h5 className='text-center'>Contact Person</h5>
          <p>Name: <span> {client.contact_person && client.contact_person.name}</span></p>
          <p>Email: <span> {client.contact_person && client.contact_person.contact_email}</span></p>
          <p>Phone: <span> {client.contact_person && client.contact_person.phone}</span></p>
          <p>Language: <span> {client.contact_person && client.contact_person.language}</span></p>
        </div>
      </Container>
    </React.Fragment>
  )
}