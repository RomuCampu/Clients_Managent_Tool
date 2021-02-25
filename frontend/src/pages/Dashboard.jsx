import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { Pagination } from '../components/Pagination'
import { paginate } from '../utils/Paginate.js'
import { Listgroup } from '../components/Listgroup'
import { readAllClientAction } from '../actions/clientActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'


export const Dashboard = () => {

  const dispatch = useDispatch()
  const readClients = useSelector(state => state.readClients)
  const [currentPage, setCurrentPage] = useState(1)
  const [pages] = useState(5)
  const history = useHistory()
  const { error, loading, clients } = readClients
  const paginatedClients = paginate(clients, currentPage, pages)
  const genres = ['Beer', 'Chocolate', 'Fries', 'Others']

  useEffect(() => {
    dispatch(readAllClientAction())
  }, [dispatch])

  const handleRedirect = (event) => {
    const client = clients.filter(client => client.email === event.target.getAttribute('email'))
    history.push(`/client/${client[0]._id}`)
  }

  const handleGenreSelect = (genre) => {
    console.log(genre)
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-1">
          {
            loading
              ? <Loader />
              : error
                ? <Message variant='danger'>{error}</Message>
                : ''
          }
          <Listgroup
            items={genres}
            onGenreSelect={handleGenreSelect}
          />
        </div>
        <div className="col">
          <h2 className='text-center py-3'>Dashboard</h2>
          <h3 className='text-center py-3'>{`Showing ${clients.length} clients in the database`}</h3>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Business Name</th>
                <th>Country</th>
                <th>Website</th>
                <th>Product</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                paginatedClients.map((client, i) => {
                  i++;
                  return (
                    <tr key={i}>
                      <td style={{ cursor: 'pointer' }} email={client.email} onClick={handleRedirect}>{i}</td>
                      <td style={{ cursor: 'pointer' }} email={client.email} onClick={handleRedirect}>{client.businessName}</td>
                      <td style={{ cursor: 'pointer' }} email={client.email} onClick={handleRedirect}>{client.country}</td>
                      <td style={{ cursor: 'pointer' }} email={client.email} onClick={handleRedirect}>{client.website}</td>
                      <td style={{ cursor: 'pointer' }} email={client.email} onClick={handleRedirect}>{client.product}</td>
                      <td style={{ cursor: 'pointer' }} email={client.email} onClick={handleRedirect}>{client.email}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
          <Pagination
            itemsCount={clients.length}
            pageSize={pages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

