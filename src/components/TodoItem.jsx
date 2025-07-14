import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext)

  return (
    <li className="flex justify-between items-center p-3 bg-gray-50 border rounded">
      <span className={`flex-1 ${todo.completed ? 'line-through text-black-500' : 'text-black-800'}`}> 
        {todo.text}
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`c px-2 py-1 rounded ${todo.completed ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
