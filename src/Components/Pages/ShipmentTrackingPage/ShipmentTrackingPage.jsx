import { ShipmentTrackingTemplate } from "../../Templates/ShipmentTrackingTemplate/ShipmentTrackingTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getShipmentRequest } from "../../../Services/modules/shipments";
import { useEffect } from "react";
import { FormatDate } from "../../../utils/ExtractDate";
import { useTranslation } from "react-i18next";
export const ShipmentTrackingPage = () => {
  const dispatch = useDispatch();
  const { shipment } = useSelector((state) => state.shipmentDetails);
  const { t, i18n } = useTranslation();
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
      promisedDate={
        i18n.language === "ar"
          ? FormatDate(shipment?.PromisedDate, "ar-EG")
          : FormatDate(shipment?.PromisedDate)
      }
    />
  );
};
