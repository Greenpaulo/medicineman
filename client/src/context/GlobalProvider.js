import { useReducer } from 'react';
import { GlobalContext  } from './GlobalState';

// Import combined initial state
import { combinedInitialState } from './GlobalState'; 

// Import actions
import { getEssenceByName, getEssencesByCompany } from '../actions/essences';

// Import Reducers
import essencesReducer from './Essences/EssencesReducer';

// Combine reducers
const combineReducers = (...reducers) => 
  (state = combinedInitialState, action) => {
    for(let i=0;i<reducers.length;i++) 
      state = reducers[i](state, action)
    return state;
  }

// NOTE - ADD NEW REDUCERS TO THE ARGS
  const combinedReducer = combineReducers(essencesReducer);


// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducer, combinedInitialState);


  return (
    <GlobalContext.Provider value={{
      essences: state.essences,
      essence: state.essence,
      error: state.error,
      loading: state.loading,
      getEssenceByName,
      getEssencesByCompany
  }}>
    {children}
  </GlobalContext.Provider>);
}
