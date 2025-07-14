import React, { createContext, useReducer } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const  TodoContext = createContext()

const initialState = []

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      if (!action.payload.text.trim()) return state
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        },
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (text) => dispatch({ type: 'ADD_TODO', payload: { text } })
  const toggleTodo = (id) => dispatch({ type: 'TOGGLE_TODO', payload: { id } })
  const deleteTodo = (id) => dispatch({ type: 'DELETE_TODO', payload: { id } })

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

