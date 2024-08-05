import { useTranslation } from "react-i18next";
import "./ShipmentDetails.css";
import { ShipmentDetailsRow } from "../ShipmentDetailsRow/ShipmentDetailsRow";
import { ExtractDate } from "../../../utils/ExtractDate";

const events = {
  TICKET_CREATED: "Ticket Created",
  PACKAGE_RECEIVED: "Package Received",
  IN_TRANSIT: "Package In Transit",
  DELIVERY_FAILED: "Delivery Failed",
  NOT_YET_SHIPPED: "Package Not Yet Shipped",
  DELIVERED_TO_SENDER: "Package Delivered To Sender",
  CANCELLED: "Cancelled",
  AVAILABLE_FOR_PICKUP: "Available For Pickup",
  WAITING_FOR_CUSTOMER_ACTION: "Waiting For Customer Action",
};
export const ShipmentDetails = ({ shipmentDetailsList }) => {
  const { t } = useTranslation();
  return (
    <div className="shipment-main-container">
      <h1 className="shipment-details-title">{t("shipment-details.title")}</h1>
      <div className="shipment-details-container">
        <ShipmentDetailsRow
          branch={t("shipment-details.branch")}
          date={t("shipment-details.date")}
          time={t("shipment-details.time")}
          details={t("shipment-details.details")}
          header={true}
        />
        {shipmentDetailsList &&
          shipmentDetailsList?.map((item, key) => (
            <ShipmentDetailsRow
              key={key}
              branch={"madinat nasr city"}
              date={ExtractDate(item?.timestamp).formattedDate}
              time={ExtractDate(item?.timestamp).formattedTime}
              details={events[item?.state]}
            />
          ))}
      </div>
    </div>
  );
};
