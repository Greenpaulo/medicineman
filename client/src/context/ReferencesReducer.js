const referencesReducer = (state, action) => {
  switch(action.type) {
    case 'GET_ALL_REFERENCE':
      return {
        ...state,
        references: action.payload
      }
    case 'GET_ALL_REFERENCE_TITLES':
      return {
        ...state,
        referenceTitles: action.payload
      }
    case 'GET_ALL_REFERENCE_TITLES_WITHOUT_SLUGS':
      return {
        ...state,
        referenceTitlesWithoutSlugs: action.payload
      }
    case 'GET_SINGLE_REFERENCE':
      return {
        ...state,
        references: action.payload
      }
    case 'SET_LOADING_REFERENCES':
      return {
        ...state,
        loadingReferences: action.payload
      }
    case 'REFERENCE_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default referencesReducer