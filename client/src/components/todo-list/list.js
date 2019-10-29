import React from "react"

const TodoList = props => (
  <ul>
    {props.testing.map((todo, index) => {
      return todo ? <li key={index}>{todo}</li> : ""
    })}
  </ul>
)

export default TodoList
