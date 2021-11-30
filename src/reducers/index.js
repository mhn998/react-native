import { combineReducers } from "redux";

export const user = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return payload;
    case "UPDATE_EMAIL":
      return { ...state, email: payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: payload };

    case "UPDATE_USERNAME":
      return { ...state, userName: payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
