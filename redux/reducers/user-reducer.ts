import {
  SIGNUP_WITH_EMAIL_FAILURE,
  SIGNUP_WITH_EMAIL_REQUEST,
  SIGNUP_WITH_EMAIL_SUCCESS,
} from "../action-types/user-action-type";

export const userReducer = (
  state: Object | null = null,
  action: { type: string; payload: Error | Object }
) => {
  switch (action.type) {
    case SIGNUP_WITH_EMAIL_REQUEST:
      return { loading: true };
    case SIGNUP_WITH_EMAIL_SUCCESS:
      return { loading: false, user: action.payload };
    case SIGNUP_WITH_EMAIL_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return null;
  }
};
