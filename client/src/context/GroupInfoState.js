import { createContext, useReducer } from "react";
import GroupInfoReducer from './GroupInfoReducer';
import axios from 'axios';

// Initial state
const initialState = {
  groupInfo: null,
  groups: null,
  loadingGroup: true,
  error: null
}

// Create context
export const GroupInfoContext = createContext(initialState);

// Provider Component
export const GroupInfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GroupInfoReducer, initialState);

  // Actions
  async function getGroupInfo(company, group) {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/groupinfo/${company}/${group}`);

      dispatch({
        type: 'GET_GROUP_INFO',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'GROUP_INFO_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function getGroupsByCompany(company) {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/groupinfo/${company}`);

      dispatch({
        type: 'GET_GROUPS_BY_COMPANY',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'GROUP_INFO_ERROR',
        payload: err.response.data.error
      })
    }
  }

  // Set loadingGroup to false after all data has been received
  function setLoadingGroup(boolean) {
    dispatch({
      type: 'SET_LOADING_GROUP',
      payload: boolean
    })
  }

  return (
    <GroupInfoContext.Provider value={{
      groupInfo: state.groupInfo,
      groups: state.groups,
      loadingGroup: state.loadingGroup,
      error: state.error,
      getGroupInfo,
      getGroupsByCompany,
      setLoadingGroup
  }}>
    {children}
  </GroupInfoContext.Provider>);
}