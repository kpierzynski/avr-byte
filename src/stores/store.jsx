import React, { useContext, useState, useEffect, useReducer } from 'react'

const StoreContext = React.createContext()

const initialState = {
  articles: [],
}

export const ACTIONS = {
  ADD_ARTICLE: 'ADD_ARTICLE',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  const context = useContext(StoreContext)
  return context
}
