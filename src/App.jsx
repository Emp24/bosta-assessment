import { useTranslation } from "react-i18next";
import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./Components/Molecules/Navbar/Navbar";
import { ShipmentDetails } from "./Components/Molecules/ShipmentDetails/ShipmentDetails";
import { AddressCard } from "./Components/Molecules/AddressCard/AddressCard";
import { ShipmentTrackingPage } from "./Components/Pages/ShipmentTrackingPage/ShipmentTrackingPage";

function App() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(window.localStorage.getItem("language"));
  }, [window.localStorage.getItem("language")]);
  return (
    <>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>
        <Navbar />
        <ShipmentTrackingPage />
        {/* <div
          style={{
            backgroundColor: "red",
            height: "10px",
            width: "400px",
            borderRadius: "10px",
          }}
        ></div> */}
      </div>
    </>
  );
}

export default App;
