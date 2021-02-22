import React from 'react'
import './input-form.css'

export const InputFieldComponent = ({ handleChange, label, ...otherProps }) => {

  return (
    <React.Fragment>
      <div className="group">
        <input
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        />

        {label
          ? (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}
          >
            {label}
          </label>)
          : null
        }
      </div>
    </React.Fragment>
  )
}
