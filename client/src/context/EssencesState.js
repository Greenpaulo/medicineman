import { createContext, useReducer } from "react";
import EssencesReducer from './EssencesReducer';
import axios from 'axios';

// Initial state
const initialState = {
  essences: null,
  essence: null,
  error: null,
  loadingEssences: true
}

// Create context
export const EssencesContext = createContext(initialState);

// Provider Component
export const EssencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EssencesReducer, initialState);

  // Actions
  async function getEssenceByName(name) {
    try {
      const res = await axios.get(`/api/v1/essences/${name}`);

      dispatch({
        type: 'GET_ESSENCE_BY_NAME',
        payload: res.data.data[0]
      })
    } catch (err) {
      dispatch({
        type: 'ESSENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getEssencesByCompany(company) {
    try {
      const res = await axios.get(`/api/v1/essences/company/${company}`);

      dispatch({
        type: 'GET_ESSENCES_BY_COMPANY',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'ESSENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getEssencesByGroup(group) {
    try {
      const res = await axios.get(`/api/v1/essences/group/${group}`);

      dispatch({
        type: 'GET_ESSENCES_BY_GROUP',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'ESSENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getEssenceNamesByChakra(chakra) {
    try {
      const res = await axios.get(`/api/v1/chakras/essence-names/${chakra}`);

      dispatch({
        type: 'GET_ESSENCES_NAMES_BY_CHAKRA',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'ESSENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getEssenceDataByChakra(chakra) {
    try {
      const res = await axios.get(`/api/v1/chakras/essence-data/${chakra}`);

      dispatch({
        type: 'GET_ESSENCE_DATA_BY_CHAKRA',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'ESSENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getEssenceDataByMeridian(meridian) {
    try {
      const res = await axios.get(`/api/v1/meridians/essence-data/${meridian}`);

      dispatch({
        type: 'GET_ESSENCE_DATA_BY_MERIDIAN',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'ESSENCE_ERROR',
        payload: err.response.data.error
      })
    }
  }
  
  function setLoadingEssences(boolean) {
    dispatch({
      type: 'SET_LOADING_ESSENCES',
      payload: boolean
    })
  }


  return (
    <EssencesContext.Provider value={{
      essences: state.essences,
      essence: state.essence,
      error: state.error,
      loadingEssences: state.loadingEssences,
      getEssenceByName,
      getEssencesByCompany,
      getEssencesByGroup,
      getEssenceNamesByChakra,
      getEssenceDataByChakra,
      getEssenceDataByMeridian,
      setLoadingEssences
  }}>
    {children}
  </EssencesContext.Provider>);
}