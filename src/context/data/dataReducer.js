import { GETDATA, FAILGETDATA, ADDDATA, FAILADDDATA } from "../type";

export default (state, action) => {
  switch (action.type) {
    case GETDATA:
      return {
        ...state,
        data: action.payload,
      };
      break;
    case ADDDATA:
      return {
        ...state,
        data: action.payload,
      };
      break;
    default:
      break;
  }
};
