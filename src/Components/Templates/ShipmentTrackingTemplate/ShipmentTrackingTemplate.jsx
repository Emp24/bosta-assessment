import { AddressCard } from "../../Molecules/AddressCard/AddressCard";
import { ShipmentDetails } from "../../Molecules/ShipmentDetails/ShipmentDetails";
import { ShipmentTracker } from "../../Organisms/ShipmentTracker/ShipmentTracker";
import "./ShipmentTrackingTemplate.css";
export const ShipmentTrackingTemplate = ({
  shipmentDetailsList,
  shipmentNumber,
  lastUpdate,
  currentStatus,
  promisedDate,
}) => {
  return (
    <>
      <ShipmentTracker
        shipmentNumber={shipmentNumber}
        lastUpdate={lastUpdate}
        currentStatus={currentStatus}
        promisedDate={promisedDate}
      />
      <div className="template-container">
        <ShipmentDetails shipmentDetailsList={shipmentDetailsList} />
        <AddressCard />
      </div>
    </>
  );
};
