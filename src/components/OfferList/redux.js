/* eslint-disable import/no-anonymous-default-export */
import api from "../../api";

const FETCH_OFFERS_REQUESTED = "posts/FETCH_OFFERS_REQUESTED";
const FETCH_OFFERS_SUCCEDED = "posts/FETCH_OFFERS_SUCCEDED";
const FETCH_OFFERS_FAILED = "posts/FETCH_OFFERS_FAILED";

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_OFFERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_OFFERS_FAILED });
const fetchSucceded = (data) => ({ type: FETCH_OFFERS_SUCCEDED, payload: data });

export const fetchOffers = () => {
  return function(dispatch) {
    dispatch(fetchRequested());
    api
      .get("offer")
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
    case FETCH_OFFERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_OFFERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        offers: action.payload,
      };
    case FETCH_OFFERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
