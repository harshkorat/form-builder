export default (state, action) => {
  switch (action.type) {
    case "SET_FORMS":
      return action.payload;
    case "REMOVE_FORM":
      return state.filter((form) => form.id !== action.payload);
    case "ADD_FORM":
      return [action.payload, ...state];
    case "EDIT_FORM":
      return state.map((form) => (form.id === action.payload.id ? action.payload : form));
    default:
      return state;
  }
};