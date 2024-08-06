import "./ShipmentTracker.css";

import redCheckMark from "../../../assets/Icons/red-check-mark.svg";
import greenCheckMark from "../../../assets/Icons/green-check-mark.svg";
import orangeCheckMark from "../../../assets/Icons/orange-check-mark.svg";
import truckIcon from "../../../assets/Icons/truck-icon.svg";
import truckIconLtr from "../../../assets/Icons/truck-icon-ltr.svg";
import fileIcon from "../../../assets/Icons/file-icon.svg";
import { useTranslation } from "react-i18next";

import {
  ExtractDate,
  ExtractDayAr,
  ExtractDayEn,
} from "../../../utils/ExtractDate";
import { useEffect, useState } from "react";

export const ShipmentTracker = ({
  shipmentNumber,
  lastUpdate,
  currentStatus,
  promisedDate,
  shipmentDetailsList,
}) => {
  const { t, i18n } = useTranslation();
  const status = {
    DELIVERED_TO_SENDER: t("shipment-statuses.package-delivered-to-sender"),
    CANCELLED: t("shipment-statuses.package-cancelled"),
    DELIVERED: t("shipment-statuses.package-delivered"),
  };
  const states = {
    TICKET_CREATED: 0,
    PACKAGE_RECEIVED: 1,
    OUT_FOR_DELIVERY: 2,
    DELIVERED: 3,
  };
  const [latestStateIndex, setLatestStateIndex] = useState(0);

  const getLatestState = () => {
    let someState;
    shipmentDetailsList?.forEach((item) => {
      if (states[item?.state] !== undefined) {
        console.log(item?.state);
        someState = states[item?.state];
      }
    });
    return someState;
  };
  useEffect(() => {
    setLatestStateIndex(getLatestState());
  }, [shipmentNumber]);
  console.log(latestStateIndex);
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
                : currentStatus === "DELIVERED_TO_SENDER"
                ? { color: "orange" }
                : { color: "black" }
            }
          >
            {status[currentStatus]}
          </p>
          <p>
            {i18n.language === "ar"
              ? ExtractDayAr(lastUpdate)
              : ExtractDayEn(lastUpdate)}
            {" " + ExtractDate(lastUpdate).formattedDate + " "}{" "}
            {ExtractDate(lastUpdate).formattedTime + " "}{" "}
          </p>
          <p>SOUQ</p>
          <p>{promisedDate}</p>
        </div>
      </div>
      <div className="steps-container">
        <div className="steps">
          {Object.keys(states)?.map((state, key) => {
            return (
              <>
                <div className="step-icon">
                  <img
                    src={
                      (key <= latestStateIndex - 1 || latestStateIndex === 3) &&
                      currentStatus === "DELIVERED"
                        ? greenCheckMark
                        : (key <= latestStateIndex - 1 ||
                            latestStateIndex === 3) &&
                          currentStatus === "CANCELLED"
                        ? redCheckMark
                        : (key <= latestStateIndex - 1 ||
                            latestStateIndex === 3) &&
                          currentStatus === "DELIVERED_TO_SENDER"
                        ? orangeCheckMark
                        : key === latestStateIndex
                        ? i18n.language === "ar"
                          ? truckIcon
                          : truckIconLtr
                        : fileIcon
                    }
                    alt="redCheckMark"
                    height={
                      key <= latestStateIndex - 1 || latestStateIndex === 3
                        ? 30
                        : key === latestStateIndex
                        ? 60
                        : 60
                    }
                    width={
                      key <= latestStateIndex - 1 || latestStateIndex === 3
                        ? 30
                        : key === latestStateIndex
                        ? 60
                        : 60
                    }
                  />
                </div>
                <div
                  className={`step-bar ${
                    (key <= latestStateIndex - 1 || latestStateIndex === 3) &&
                    (currentStatus === "DELIVERED"
                      ? "completed"
                      : currentStatus === "CANCELLED"
                      ? "cancelled"
                      : currentStatus === "DELIVERED_TO_SENDER"
                      ? "delivered-to-sender"
                      : "")
                  }`}
                />
              </>
            );
          })}
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
