export default function (state = {}, action) {
    switch (action.type) {
      case "ADMIN_TRUE":
        return {
          ...state,
          admin: true,
        };
      case "ADMIN_FALSE":
        return {
          ...state,
          admin: false,
        };
      default:
        return state;
    }
  }
  