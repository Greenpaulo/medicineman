import { createContext, useReducer } from "react";
import ReferencesReducer from './ReferencesReducer';
import axios from 'axios';

// Initial state
const initialState = {
  references: null,
  referenceTitles: null,
  referenceTitlesWithoutSlugs: null,
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
      const res = await axios.get('/api/v1/references');

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
      const res = await axios.get('/api/v1/references/titles');

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

  async function getAllReferenceTitlesWithoutSlugs() {
    try {
      const res = await axios.get('/api/v1/references/titles');

      const references = res.data.data;

      let justTitles = []
      
      references.forEach(ref => {
        justTitles.push(ref.title.toLowerCase())
      })

      dispatch({
        type: 'GET_ALL_REFERENCE_TITLES_WITHOUT_SLUGS',
        payload: justTitles
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
      const res = await axios.get(`/api/v1/references/${reference}`);

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
      referenceTitlesWithoutSlugs: state.referenceTitlesWithoutSlugs,
      error: state.error,
      loadingReferences: state.loadingReferences,
      getAllReferences,
      getAllReferenceTitles,
      getAllReferenceTitlesWithoutSlugs,
      getSingleReference,
      setLoadingReferences
  }}>
    {children}
  </ReferencesContext.Provider>);
}