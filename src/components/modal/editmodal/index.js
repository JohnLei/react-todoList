import React, { useRef } from 'react'
import Modal from '..'
import { formatDateTime } from '../../../utils'

import '../../../style/editmodal.scss'

function EditModal (props) {
  const InputRef = useRef(null)
  const checkRef = useRef(null)
  // 是否显示
  // 数据
  // 提交方法
  const { isShowEditModal, data, submitEdit } = props
  const formNewData = () => {
    const Currentvalue = InputRef.current.value.trim()
    if (Currentvalue.lentgh === 0) {
      InputRef.current.value = data.content
      return
    }

    const newData = {
      id: new Date().getTime(),
      content: Currentvalue,
      complete: checkRef.current.checked
    }
    submitEdit(newData, data.id)
  }

  return (
    <>
      <Modal
        isShowModal={isShowEditModal}
        modalTitle="编辑事件"
      >
        <p className="topic">
          内容：
          <textarea ref={InputRef} defaultValue={data.content}></textarea>
        </p>
        <p className="topic">时间：{formatDateTime(data.id)}</p>
        <p className="topic">
          状态：
          <input type="checkbox" ref={checkRef} defaultChecked={data.complete ? true : false}></input>
        </p>
        <button className="btn" onClick={formNewData}>提交</button>
      </Modal>
    </>
  )
}

export default EditModal