import React from 'react'
import PropTypes from 'prop-types'

export const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {

 const pagesCount = Math.ceil(itemsCount / pageSize)
 if (pagesCount === 1) return null

 const pages = []

 for (let i = 0; i < pagesCount; i++) {
  pages.push(i + 1)
 }

 return (
  <nav>
   <ul className='pagination'>
    {pages.map(page => (
     <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
      <a href='#/'
       className='page-link'
       onClick={() => onPageChange(page)}>
       {page}
      </a>
     </li>
    ))}
   </ul>
  </nav>
 )
}

Pagination.propTypes = {
 itemsCount: PropTypes.number.isRequired,
 pageSize: PropTypes.number.isRequired,
 currentPage: PropTypes.number.isRequired,
 onPageChange: PropTypes.func.isRequired
}