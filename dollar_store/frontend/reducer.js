import { merge } from 'lodash';
const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case "SWITCH_CURRENCY":
      newState.baseCurrency = action.baseCurrency;
      newState.rates = action.rates;
      return newState;
    default:
      return state;
  }
};

export default reducer;
