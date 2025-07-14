import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useContext(TodoContext)

  if (todos.length === 0) {
    return <p className="text-center text-black-500 mt-4">No tasks yet.</p>
  }

  return (
    <ul className="mt-6 space-y-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
