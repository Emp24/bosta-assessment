import { useTranslation } from "react-i18next";
import "./ShipmentDetails.css";
import { ShipmentDetailsRow } from "../ShipmentDetailsRow/ShipmentDetailsRow";
import { ExtractDate } from "../../../utils/ExtractDate";

export const ShipmentDetails = ({ shipmentDetailsList }) => {
  const { t } = useTranslation();
  const events = {
    TICKET_CREATED: t("shipment-states.shipment-created"),
    PACKAGE_RECEIVED: t("shipment-states.shipment-received-from-vendor"),
    IN_TRANSIT: t("shipment-states.shipment-out-for-delivery"),
    DELIVERY_FAILED: t("shipment-statuses.package-delivery-failed"),
    NOT_YET_SHIPPED: t("shipment-statuses.package-not-yet-shipped"),
    DELIVERED_TO_SENDER: t("shipment-statuses.package-delivered-to-sender"),
    CANCELLED: t("shipment-statuses.package-cancelled"),
    AVAILABLE_FOR_PICKUP: t("shipment-statuses.package-available-for-pickup"),
    WAITING_FOR_CUSTOMER_ACTION: t(
      "shipment-statuses.package-waiting-for-customer"
    ),
    DELIVERED: t("shipment-statuses.package-delivered"),
    OUT_FOR_DELIVERY: t("shipment-states.shipment-out-for-delivery"),
  };
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
              branch={"مدينة نصر"}
              date={ExtractDate(item?.timestamp).formattedDate}
              time={ExtractDate(item?.timestamp).formattedTime}
              details={events[item?.state]}
            />
          ))}
      </div>
    </div>
  );
};
