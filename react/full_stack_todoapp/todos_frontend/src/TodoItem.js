import React from 'react'

const TodoItem = (props) => {

    return(
      <li> <span onClick={props.onToggle}
        style={{
            textDecoration: props.completed ? 'line-through' : 'none'
          }}
       key={props._id}>{props.name}</span><span onClick={props.onDelete}> X </span></li>
      )
  }


export default TodoItem
