import React from 'react'
import Modal from '..'
import { formatDateTime } from '../../../utils'

import '../../../style/checkmodal.scss'

function CheckModal (props) {
  // 关闭
  // 是否显示modal
  // 中间数据
  const {isShowCheckModal, data, closeModal } = props
  return (
    <Modal
      isShowModal={isShowCheckModal}
      modalTitle="查看事件"
    >
      <p className="toplink">时间：{formatDateTime(data.id)}</p>
      <p className="toplink">内容：{data.content}</p>
      <p className="toplink">状态：{data.complete ? '已完成' : '未完成'}</p>
      <div className="btn">
        <button className="btn-primary" onClick={closeModal}>确定</button>
      </div>
    </Modal>
  )
}

export default CheckModal