const groupInfoReducer = (state, action) => {
  switch(action.type) {
    case 'GET_GROUP_INFO':
      return {
        ...state,
        groupInfo: action.payload
      }
    case 'GET_GROUPS_BY_COMPANY':
      return {
        ...state,
        groups: action.payload
      }
    case 'SET_LOADING_GROUP':
      return {
        ...state,
        loadingGroup: action.payload
      }
    case 'GROUP_INFO_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default groupInfoReducer