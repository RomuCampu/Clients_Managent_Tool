import React from 'react'
import './input-form.css'

export const TextArea = ({ label, content, handleChange, ...otherProps }) => {
  return (
    <React.Fragment>
      <div className="text-area">
        <textarea id="description" name="Description" rows="5" cols="70">
          {content}
        </textarea>
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
