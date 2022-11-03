import {ADD_TODO, DETELE_TODO, EDIT_TODO} from '../constants/todoConstants'

export const addTodo=(payload)=>{
    console.log(payload)

    return{
        type:ADD_TODO,
        payload
    }
}

export const editTodo=(payload)=>{
    return {
        type:EDIT_TODO,
        payload
    }
}

export const deleteTodo=(payload)=>{
    console.log(payload)

    return{
        type:DETELE_TODO,
        payload
    }
}