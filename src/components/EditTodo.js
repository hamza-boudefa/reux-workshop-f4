import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo } from '../redux/actions/todoActions'

const EditTodo = ({todo}) => {
    const [show, setShow] = useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
const aa=useSelector(state=>state)
console.log(aa.text)
    const [cred, setCred] = useState(aa.text)
const handleText=(e)=>{
    setCred(e.target.value)
    console.log(cred)
}
 const dispatch=useDispatch()

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        edit todo
      </Button>

      <Modal show={show} onHide={handleShow} animation={false}>
            <Form.Control value={cred} onChange={handleText} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(editTodo({id:todo.id,text:cred}))}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTodo