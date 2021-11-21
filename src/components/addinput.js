import React, { useRef } from 'react'

import '../style/addinput.scss'

function AddInput (props) {
  const InputRef = useRef(null)
  const { isInputshow, addItem } = props
  const submitValue = () => {
    const currentValue = InputRef.current.value.trim()
    if (currentValue.length === 0) {
      return
    }
    addItem(currentValue)
    InputRef.current.value = ''
  }
  return (
   <>
    {
      isInputshow && (
        <div className="input-wrapper">
          <input type="text" ref={InputRef} placeholder="请输入待办事项"></input>
          <button onClick={submitValue}>添加</button>
        </div>
      )
    }
   </>
  )
}

export default AddInput