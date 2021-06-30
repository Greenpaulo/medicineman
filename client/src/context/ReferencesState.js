import { createContext, useReducer } from "react";
import ReferencesReducer from './ReferencesReducer';
import axios from 'axios';

// Initial state
const initialState = {
  references: null,
  referenceTitles: null,
  error: null,
  loadingReferences: true
}

// Create context
export const ReferencesContext = createContext(initialState);

// Provider Component
export const ReferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReferencesReducer, initialState);

  // Actions
  async function getAllReferences() {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/references');

      dispatch({
        type: 'GET_ALL_REFERENCES',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'REFERENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getAllReferenceTitles() {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/references/titles');

      dispatch({
        type: 'GET_ALL_REFERENCE_TITLES',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'REFERENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getSingleReference(reference) {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/references/${reference}`);

      dispatch({
        type: 'GET_SINGLE_REFERENCE',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'REFERENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }
  
  function setLoadingReferences(boolean) {
    dispatch({
      type: 'SET_LOADING_REFERENCES',
      payload: boolean
    })
  }


  return (
    <ReferencesContext.Provider value={{
      references: state.references,
      referenceTitles: state.referenceTitles,
      error: state.error,
      loadingReferences: state.loadingReferences,
      getAllReferences,
      getAllReferenceTitles,
      getSingleReference,
      setLoadingReferences
  }}>
    {children}
  </ReferencesContext.Provider>);
}