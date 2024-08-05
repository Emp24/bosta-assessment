import "./ShipmentSearch.css";
import searchIcon from "../../../assets/Icons/search-icon.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getShipmentRequest } from "../../../Services/modules/shipments";
export const ShipmentSearch = ({ handleOnClick }) => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" }}>
      <h1 className="shipment-details-title">Track your shipment</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Tracking number"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            dispatch(getShipmentRequest(search));
            console.log(search);
          }}
        >
          <img src={searchIcon} />
        </button>
      </div>
    </div>
  );
};
