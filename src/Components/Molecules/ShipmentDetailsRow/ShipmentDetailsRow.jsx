import "./ShipmentDetailsRow.css";
export const ShipmentDetailsRow = ({ branch, date, time, details, header }) => {
  return (
    <div className={header ? "shipment-row-header" : "shipment-row"}>
      <p>{branch}</p>
      <p>{date}</p>
      <p> {time}</p>
      <p> {details}</p>
    </div>
  );
};
