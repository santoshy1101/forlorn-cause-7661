import {
  ERROR,
  GET,
  LOADING,
  SORT,
  SORT_BRAND,
  SORT_COLOR,
} from "./women.actiontype";

let init = {
  data: [],
  loading: false,
  error: false,
};
export const womenReducer = (state = init, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET: {
      return { ...state, data: payload, loading: false, error: false };
    }
    case SORT: {
      let data = payload.data;
      let sort = payload.sort;
      console.log(sort);
      if (sort === "lth") {
        data = data.sort((a, b) => a.price - b.price);
      } else if (sort === "htl") {
        data = data.sort((a, b) => b.price - a.price);
      }
      return { ...state, data: data, loading: false, error: false };
    }
    case SORT_BRAND: {
      return { ...state, data: payload, loading: false, error: false };
    }
    case SORT_COLOR: {
      return { ...state, data: payload, loading: false, error: false };
    }
    case LOADING: {
      return { ...state, loading: true, error: false };
    }
    case ERROR: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
