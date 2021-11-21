import React, { useCallback, useState, useEffect } from 'react'

import Header from './components/header'
import AddInput from './components/addinput'
import TodoItem from './components/todoitem'
import CheckModal from './components/modal/checkmodal'
import EditModal from './components/modal/editmodal'
import Empty from './components/Empty'

function App () {
  const [Isvisib, setVisib] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [isShowCheckModal, setShowCheckModal] = useState(false)
  const [currentData, setCurrentData] = useState({})
  const [isShowEditModal, setShowEditModal] = useState(false)

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]')
    setTodoList(todoData)
  }, [])
  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoList))
  }, [todoList])

  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      complete: false
    }
    setTodoList((todoList) =>[...todoList, dataItem])
    setVisib(false)
  }, [])

  const openCheckModal = useCallback((id) => {
    setCurrentData(() => todoList.filter(item => item.id === id)[0])
    setShowCheckModal(true)
  }, [todoList])

  const openEditModal = useCallback((id) => {
    setCurrentData(() => todoList.filter(item => item.id === id)[0])
    setShowEditModal(true)
  },[todoList])

  const submitEdit = useCallback((newData, id) => {
    setTodoList(() =>
    todoList.map(item => {
      if(item.id === id) {
        item = newData
      }
      return item
    })
    )
    setShowEditModal(false)
  }, [todoList])

  const completeItem = useCallback((id) => {
    setTodoList((todoList) =>
    todoList.map(item => {
      if (item.id === id) {
        item.complete = !item.complete
      }
      return item
    })
    )
  }, [])

  const deleteItem = useCallback((id) => {
    setTodoList((todoList) =>
      todoList.filter(item => item.id !== id)
    )
  }, [])
  // const _SetcurrentData = (id) => {
  //   setCurrentData(() => todoList.filter(item => item.id === id)[0])
  // }
  return (
    <div style={{width: '100%', maxWidth: '640px', minWidth: '320px', margin: '0 auto'}}>
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        closeModal={() => setShowCheckModal(false)}
        data ={ currentData }
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEdit={submitEdit}
      />
      <Header openInput={() => setVisib(!Isvisib)} />
      <AddInput isInputshow={Isvisib} addItem={addItem} />
      {/* Empty */}
      {
        todoList.length > 0 ? (
          <ul style={{overflow:'hidden'}}>
          {
            todoList.map((i, x) => {
              return (
               <TodoItem
               openCheckModal={openCheckModal}
               openEditModal={openEditModal}
               complete={completeItem}
               removeItem = {deleteItem}
               data={i}
               key={x}
               />
              )
            })
          }
         </ul>
        ) : (
          <Empty/>
        )
      }
    </div>
  )
}

export default App