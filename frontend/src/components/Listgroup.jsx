import React from 'react'

export const Listgroup = ({ items }) => {
 return (
  <React.Fragment>
   <div className="listgroup pt-5">
    <ul className='list-group'>
     {items.map(genre => <li key={genre} className="list-group-item">{genre}</li>)}
    </ul>
   </div>
  </React.Fragment>
 )
}
