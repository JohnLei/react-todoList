import React from 'react'

import '../style/todoitem.scss'

function TodoItem (props) {
  const { openCheckModal, data, openEditModal, complete, removeItem } = props
  return (
      <li className="toto-item">
        <div className="check-box">
          <input type="checkbox" checked={data.complete} onChange={() => complete(data.id)}></input>
        </div>
        <span className="content" style={{'textDecoration': data.complete ? 'line-through' : ''}}>{data.content}</span>
        <div className="btn-box">
          <button className="btn-primary" onClick={() => openCheckModal(data.id)}>查看</button>
          <button className="btn-warning" onClick={() => openEditModal(data.id)}>编辑</button>
          <button className="btn-denger" onClick={() => removeItem(data.id)}>删除</button>
        </div>
      </li>
  )
}
export default TodoItem