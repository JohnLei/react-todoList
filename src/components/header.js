import React from 'react'

import '../style/header.scss'

function Header (props) {
  const { openInput } = props
  return (
     <div className="header-box">
       <ul className="clearfix">
         <li>事件待办</li>
         <li onClick={openInput}>+</li>
       </ul>
     </div>
  )
}

export default Header