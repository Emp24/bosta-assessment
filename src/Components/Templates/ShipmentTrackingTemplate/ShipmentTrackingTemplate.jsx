import { AddressCard } from "../../Molecules/AddressCard/AddressCard";
import { ShipmentDetails } from "../../Molecules/ShipmentDetails/ShipmentDetails";
import { SupportCard } from "../../Molecules/SupportCard/SupportCard";
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
      <main className="template-container">
        <ShipmentTracker
          shipmentNumber={shipmentNumber}
          lastUpdate={lastUpdate}
          currentStatus={currentStatus}
          promisedDate={promisedDate}
          shipmentDetailsList={shipmentDetailsList}
        />
        <div className="template-second-half">
          <ShipmentDetails shipmentDetailsList={shipmentDetailsList} />
          <div>
            <AddressCard />
            <SupportCard />
          </div>
        </div>
      </main>
    </>
  );
};
