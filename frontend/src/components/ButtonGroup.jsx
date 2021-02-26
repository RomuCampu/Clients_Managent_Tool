import React from 'react'

export const ButtonGroup = ({ genres }) => {
  return (
    <React.Fragment>
      <div class="btn-group" role="group" aria-label="Basic example">
        {
          genres.map(item =>
            <button type="button" className="btn btn-secondary">{item}</button>)
        }
      </div>
    </React.Fragment>
  )
}
