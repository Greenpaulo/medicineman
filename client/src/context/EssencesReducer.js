const essencesReducer = (state, action) => {
  switch(action.type) {
    case 'GET_ESSENCE_BY_NAME':
      return {
        ...state,
        essence: action.payload
      }
    case 'GET_ESSENCES_BY_COMPANY':
      return {
        ...state,
        essences: action.payload
      }
    case 'GET_ESSENCES_BY_GROUP':
      return {
        ...state,
        essences: action.payload
      }
    case 'GET_ESSENCES_NAMES_BY_CHAKRA':
      return {
        ...state,
        essences: action.payload
      }
    case 'GET_ESSENCE_DATA_BY_CHAKRA':
      return {
        ...state,
        essences: action.payload
      }
    case 'GET_ESSENCE_DATA_BY_MERIDIAN':
      return {
        ...state,
        essences: action.payload
      }
    case 'SET_LOADING_ESSENCES':
      return {
        ...state,
        loadingEssences: action.payload
      }
    case 'ESSENCE_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default essencesReducer