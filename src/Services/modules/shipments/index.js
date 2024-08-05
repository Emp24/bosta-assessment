import { getShipmensLoading, getShipmentsSuccess } from "./Actions";
import axios from "axios";
export const getShipmentRequest = (id) => async (dispatch) => {
  dispatch(getShipmensLoading(true));
  const { data } = await axios.get(
    `https://tracking.bosta.co/shipments/track/${id}`
  );
  dispatch(getShipmentsSuccess(data));
  dispatch(getShipmensLoading({ isLoading: false }));
};
