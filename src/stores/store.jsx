import React, { useContext, useReducer } from 'react'

const StoreContext = React.createContext()

const initialState = {
  articles: [],
}

const ACTIONS = {
  ADD_ARTICLES: 'ADD_ARTICLES',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ARTICLES:
      return { ...state, articles: [...state.articlesm, action.payload] }
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
