import React, { useState } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TodoList from "../components/todo-list/list"

import { Button, TextInput } from "@primer/components"

const IndexPage = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    setTodos([...todos, todo])
    setTodo("")
  }

  return (
    <Layout>
      <SEO title="Todo List" />
      <form onSubmit={e => handleSubmit(e)}>
        <TextInput
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Enter a todo"
          type="text"
          required
        />
        <Button type="submit">Button</Button>
      </form>
      <TodoList testing={todos} />
    </Layout>
  )
}

export default IndexPage
