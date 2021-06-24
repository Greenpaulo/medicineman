import { createContext } from "react";

// Initial state imports
import { essencesState } from './Essences/EssencesState'; 

export const combinedInitialState = {
  loading: true,
  ...essencesState
}

// Create context
export const GlobalContext = createContext(combinedInitialState);