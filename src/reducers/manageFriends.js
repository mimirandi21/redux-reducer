let initialState = [];
export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      break;
    default:
      return state;
      break;
  }
}
