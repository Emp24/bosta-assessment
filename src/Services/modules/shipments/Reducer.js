import Types from "./Types";

const INIT_STATE = {
  shipment: null,
  load: {
    type: "",
    isLoading: false,
  },
};

export default function shipmentsReducer(state = INIT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_SHIPMENT_SUCCESS: {
      return {
        ...state,
        shipment: payload,
      };
    }

    case Types.GET_SHIPMENT_LOADING: {
      return {
        ...state,
        load: payload,
      };
    }
    default: {
      return state;
    }
  }
}
