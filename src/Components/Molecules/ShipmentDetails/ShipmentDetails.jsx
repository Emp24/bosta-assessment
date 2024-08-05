import { useTranslation } from "react-i18next";
import "./ShipmentDetails.css";

const ShipmentRow = ({ branch, date, time, details, header }) => {
  return (
    <div className={header ? "shipment-row-header" : "shipment-row"}>
      <p>{branch}</p>
      <p>{date}</p>
      <p> {time}</p>
      <p> {details}</p>
    </div>
  );
};

export const ShipmentDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="shipment-main-container">
      <h1 className="shipment-details-title">{t("shipment-details.title")}</h1>
      <div className="shipment-details-container">
        <ShipmentRow
          branch={t("shipment-details.branch")}
          date={t("shipment-details.date")}
          time={t("shipment-details.time")}
          details={t("shipment-details.details")}
          header={true}
        />
        <ShipmentRow
          branch={"madinat nasr city"}
          date={t("shipment-details.date")}
          time={t("shipment-details.time")}
          details={t("shipment-details.details")}
        />
        <ShipmentRow
          branch={t("shipment-details.branch")}
          date={t("shipment-details.date")}
          time={t("shipment-details.time")}
          details={t("shipment-details.details")}
        />
        <ShipmentRow
          branch={t("shipment-details.branch")}
          date={t("shipment-details.date")}
          time={t("shipment-details.time")}
          details={t("shipment-details.details")}
        />
        <ShipmentRow
          branch={t("shipment-details.branch")}
          date={t("shipment-details.date")}
          time={t("shipment-details.time")}
          details={t("shipment-details.details")}
        />
      </div>
    </div>
  );
};
