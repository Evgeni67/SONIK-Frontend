export default function (state = {}, action) {
    switch (action.type) {
      case "SET_NEW_WORKERS":
        return {
          ...state,
          workers: action.payload,
        };
     
      default:
        return state;
    }
  }
  