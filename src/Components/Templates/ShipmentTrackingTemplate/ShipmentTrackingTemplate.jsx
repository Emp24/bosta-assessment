import { AddressCard } from "../../Molecules/AddressCard/AddressCard";
import { ShipmentDetails } from "../../Molecules/ShipmentDetails/ShipmentDetails";
import "./ShipmentTrackingTemplate.css";
export const ShipmentTrackingTemplate = ({ shipmentDetailsList }) => {
  return (
    <>
      <div className="template-container">
        <ShipmentDetails shipmentDetailsList={shipmentDetailsList} />
        <AddressCard />
      </div>
    </>
  );
};
