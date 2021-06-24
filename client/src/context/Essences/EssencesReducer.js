const essencesReducer = (state, action) => {
  switch(action.type) {
    case 'GET_ESSENCE_BY_NAME':
      return {
        ...state,
        loading: false,
        essence: action.payload
      }
    case 'GET_ESSENCES_BY_COMPANY':
      return {
        ...state,
        loading: false,
        essences: action.payload
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