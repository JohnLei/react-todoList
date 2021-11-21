import React from 'react'
import '../../style/modal.scss'

function Modal (props) {
  const {isShowModal, modalTitle, children } = props
  return(
    <>
    {
      isShowModal ? (
        <div className="modal">
        <div className="inner">
          <div className="title-header">{modalTitle}</div>
          <div className="content-wraper">
            {children}
          </div>
        </div>
      </div>
      ) : ''
    }
    </>
  )
}

export default Modal