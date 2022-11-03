import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/todoActions'

const AddTodo = () => {
     const [input, setInput] = useState("")

     const handleInput=(e)=>{
        setInput(e.target.value)
        
     }

     const dispatch= useDispatch()
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter email"  value={input} onChange={(e)=>handleInput(e)} />
      </Form.Group>
      <Button variant="primary" onClick={(e)=>dispatch(addTodo({ id:Math.random(), text:input}))(e.preventDefault(e))} >
        Add
      </Button>
    </Form>
    </div>
  )
}

export default AddTodo