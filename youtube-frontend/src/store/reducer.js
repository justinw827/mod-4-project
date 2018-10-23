const defaultState = {
  userId: -1,
  userVideos: [],
  homeVideos: []
}

export default (state=defaultState, action) => {
  const newState = {...state}
  switch (action.type) {
    case "CHANGE_CURRENT_USER":
      newState.userId = action.user_id
      return newState
    case "UPDATE_USER_VIDEOS":
      newState.userVideos = action.userVideos
      return newState
    case "UPDATE_HOME_VIDEOS":
      newState.homeVideos = action.homeVideos
      return newState
    default:
      return state
  }
}
