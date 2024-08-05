import { AddressCard } from "../../Molecules/AddressCard/AddressCard";
import { ShipmentDetails } from "../../Molecules/ShipmentDetails/ShipmentDetails";
import "./ShipmentTrackingTemplate.css";
export const ShipmentTrackingTemplate = () => {
  return (
    <>
      <div className="template-container">
        <ShipmentDetails />
        <AddressCard />
      </div>
    </>
  );
};
