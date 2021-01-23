/* eslint-disable import/no-anonymous-default-export */
import api from "../../api";

const FETCH_USERS_REQUESTED = "posts/FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEDED = "posts/FETCH_USERS_SUCCEDED";
const FETCH_USERS_FAILED = "posts/FETCH_USERS_FAILED";

const INITIAL_STATE = {
  users: [],
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_USERS_FAILED });
const fetchSucceded = (data) => ({ type: FETCH_USERS_SUCCEDED, payload: data });

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchRequested());
    api
      .get("users")
      .then((response) => {
        dispatch(fetchSucceded(response));
      })
      .catch((error) => {
        dispatch(fetchFailed(error));
      });
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
