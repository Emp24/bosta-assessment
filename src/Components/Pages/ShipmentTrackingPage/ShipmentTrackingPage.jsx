import { ShipmentTrackingTemplate } from "../../Templates/ShipmentTrackingTemplate/ShipmentTrackingTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getShipmentRequest } from "../../../Services/modules/shipments";
import { useEffect } from "react";
export const ShipmentTrackingPage = () => {
  const dispatch = useDispatch();
  const { shipment } = useSelector((state) => state.shipmentDetails);
  useEffect(() => {
    dispatch(getShipmentRequest("3468570"));
  }, []);

  console.log(shipment);
  return <ShipmentTrackingTemplate />;
};
