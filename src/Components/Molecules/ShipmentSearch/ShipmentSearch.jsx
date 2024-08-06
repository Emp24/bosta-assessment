import "./ShipmentSearch.css";
import searchIcon from "../../../assets/Icons/search-icon.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getShipmentRequest } from "../../../Services/modules/shipments";
import { useTranslation } from "react-i18next";
export const ShipmentSearch = ({ handleOnClick, direction }) => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" }}>
      <h1 className="shipment-search-title">
        {t("navbar.track-your-shipment")}
      </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder={t("shipment-search.placeholder")}
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            if (search === "") return;
            dispatch(getShipmentRequest(search));
            setSearch("");
          }}
        >
          <img src={searchIcon} />
        </button>
      </div>
    </div>
  );
};
