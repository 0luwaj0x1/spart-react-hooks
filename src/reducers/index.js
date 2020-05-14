

export default function searchReducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}