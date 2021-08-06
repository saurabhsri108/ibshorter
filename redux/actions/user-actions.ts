import axios from "axios";
import { v4 as uuid } from "uuid";
import {
  SIGNUP_WITH_EMAIL_FAILURE,
  SIGNUP_WITH_EMAIL_REQUEST,
  SIGNUP_WITH_EMAIL_SUCCESS,
} from "../action-types/user-action-type";

export const signUpWithEmail =
  (username: string, email: string, password: string) =>
  async (dispatch: Function) => {
    try {
      dispatch({ type: SIGNUP_WITH_EMAIL_REQUEST });

      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        "/api/v1/user/signup",
        { username, email, password },
        config
      );

      dispatch({ type: SIGNUP_WITH_EMAIL_SUCCESS, payload: data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: SIGNUP_WITH_EMAIL_FAILURE,
          payload: error,
        });
      }
    }
  };
