import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/actions/todoActions'
import EditTodo from './EditTodo'

const Todo = ({todo}) => {

  const dispatch=useDispatch()
  return (
    <div className='todo'>
        <h1>{todo.text}</h1>
        <EditTodo todo={todo} />
        <Button onClick={()=>dispatch(deleteTodo(todo.id))}  > delete </Button>
    </div>
  )
}

export default Todo