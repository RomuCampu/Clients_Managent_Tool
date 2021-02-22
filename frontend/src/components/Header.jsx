import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const Header = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <LinkContainer to='/'>
            <Navbar.Brand>BeTrade</Navbar.Brand>
          </LinkContainer><Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Container>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/dashboard'>
                  <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/form'>
                  <Nav.Link>Add</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </React.Fragment>
  )
}
