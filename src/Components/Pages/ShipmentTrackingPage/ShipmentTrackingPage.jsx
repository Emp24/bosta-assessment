import { ShipmentTrackingTemplate } from "../../Templates/ShipmentTrackingTemplate/ShipmentTrackingTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getShipmentRequest } from "../../../Services/modules/shipments";
import { useEffect } from "react";
import { ExtractDate } from "../../../utils/ExtractDate";
export const ShipmentTrackingPage = () => {
  const dispatch = useDispatch();
  const { shipment } = useSelector((state) => state.shipmentDetails);

  useEffect(() => {
    dispatch(getShipmentRequest("40106705"));
  }, []);

  console.log(shipment);
  return (
    <ShipmentTrackingTemplate
      shipmentDetailsList={shipment?.TransitEvents}
      shipmentNumber={shipment?.TrackingNumber}
      lastUpdate={shipment?.CurrentStatus?.timestamp}
      currentStatus={shipment?.CurrentStatus?.state}
      promisedDate={ExtractDate(shipment?.PromisedDate).formattedDate}
    />
  );
};
