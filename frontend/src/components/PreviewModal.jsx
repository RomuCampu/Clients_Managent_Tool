import React from 'react'

export const PreviewModal = ({ output }) => {
  return (
    <React.Fragment>
      <div className="modal fade" id="previewModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Preview Modal
              </h5>
            </div>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: output }} />
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
