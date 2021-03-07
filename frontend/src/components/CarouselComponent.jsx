import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { readAllClientAction } from '../actions/clientActions'
import { Carousel, Image } from 'react-bootstrap'
import { Message } from './Message'
import './carousel.css'

export const CarouselComponent = () => {

  const dispatch = useDispatch()
  const readClients = useSelector(state => state.readClients)
  const { error, clients } = readClients
  console.log(clients);

  useEffect(() => {
    dispatch(readAllClientAction())
  }, [dispatch])

  return (
    <React.Fragment>
      {error ? <Message variant='danger'>{error}</Message>
        :
        <Carousel pauze='hover' className='bg-dark carousel'>
          {clients.map(client =>
            <Carousel.Item key={client._id}>
              <Link to={`/client/${client._id}`}>
                <Image src={'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg'} alt={client.businessName} fluid />
              </Link>
              <Carousel.Caption className='carousel-caption'>
                <h3>{client.businessName}</h3>
                <h4>{client.website}</h4>
                <h5>{client.country}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      }
    </React.Fragment>
  )
}