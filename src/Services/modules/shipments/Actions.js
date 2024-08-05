import Types from "./Types";

export const getShipmentsSuccess = (payload) => ({
  type: Types.GET_SHIPMENT_SUCCESS,
  payload,
});

export const getShipmensLoading = (payload) => ({
  type: Types.GET_SHIPMENT_LOADING,
  payload,
});
