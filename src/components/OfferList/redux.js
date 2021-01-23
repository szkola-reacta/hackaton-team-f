/* eslint-disable import/no-anonymous-default-export */
import api from "../../api";

const FETCH_POSTS_REQUESTED = "offers/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEDED = "offers/FETCH_POSTS_REQUESTED";
const FETCH_POSTS_FAILED = "offers/FETCH_POSTS_REQUESTED";

const INITIAL_STATE = {
  offers: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_POSTS_REQUESTED });
const fetchSucceded = (data) => ({ type: FETCH_POSTS_SUCCEDED, payload: data });
const fetchFailed = () => ({ type: FETCH_POSTS_FAILED });
export const fetchOffers = () => {
  return function(dispatch) {
    dispatch(fetchRequested);
    api.get("offers")
    .then((response) => {
      fetchSucceded(response);
    })
    .catch(error => dispatch(fetchFailed(error)));
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        offers: action.payload,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
