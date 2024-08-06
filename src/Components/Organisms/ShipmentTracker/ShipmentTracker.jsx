import "./ShipmentTracker.css";

import redCheckMark from "../../../assets/Icons/red-check-mark.svg";
import { useTranslation } from "react-i18next";
import { ExtractDate } from "../../../utils/ExtractDate";
const status = {
  DELIVERED_TO_SENDER: "Delivered To Sender",
  CANCELLED: "Cancelled",
  DELIVERED: "Delivered",
};
export const ShipmentTracker = ({
  shipmentNumber,
  lastUpdate,
  currentStatus,
  promisedDate,
}) => {
  const { t } = useTranslation();
  return (
    <div className="tracker-main-container">
      <div className="tracker-first-container">
        <div className="tracker-row first-row-font">
          <p>{t("shipment-tracker.shipment-number") + " " + shipmentNumber}</p>
          <p>{t("shipment-tracker.last-update")}</p>
          <p>{t("shipment-tracker.vendor-name")}</p>
          <p>{t("shipment-tracker.delivery-date")}</p>
        </div>
        <div className="tracker-row second-row-font">
          <p
            style={
              currentStatus === "CANCELLED"
                ? { color: "red" }
                : currentStatus === "DELIVERED"
                ? { color: "green" }
                : { color: "black" }
            }
          >
            {status[currentStatus]}
          </p>
          <p>
            الاثنين
            {" " + ExtractDate(lastUpdate).formattedDate + " "}{" "}
            {ExtractDate(lastUpdate).formattedTime + " "}{" "}
          </p>
          <p>SOUQ</p>
          <p>{promisedDate}</p>
        </div>
      </div>
      <div className="steps-container">
        <div className="steps">
          <div className="step-icon">
            <img src={redCheckMark} alt="redCheckMark" height={30} width={30} />
          </div>
          <div className="step-bar" />
          <div className="step-icon">
            <img src={redCheckMark} alt="redCheckMark" height={30} width={30} />
          </div>
          <div className="step-bar" />
          <div className="step-icon">
            <img src={redCheckMark} alt="redCheckMark" height={30} width={30} />
          </div>
          <div className="step-bar" />
          <img src={redCheckMark} alt="redCheckMark" height={30} width={30} />
          <div className="step-bar" />
        </div>
        <div className="tracker-row third-row-font">
          <p>{t("shipment-states.shipment-created")}</p>
          <p>{t("shipment-states.shipment-received-from-vendor")}</p>
          <p>{t("shipment-states.shipment-out-for-delivery")}</p>
          <p>{t("shipment-states.shipment-delivered")}</p>
        </div>
      </div>
    </div>
  );
};
