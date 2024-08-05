import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from "../../../assets/Images/image.svg";
import Dropdown from "../Dropdown/Dropdown";
import { ShipmentSearch } from "../ShipmentSearch/ShipmentSearch";
export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const options = ["Option 1", "Option 2", "Option 3"];
  const changeLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("ar")
      : i18n.changeLanguage("en");

    if (i18n.language === "ar") {
      localStorage.setItem("language", "ar");
    } else {
      localStorage.setItem("language", "en");
    }
    window.location.reload();
  };
  return (
    <div className="main-container">
      <div className="main-inner-container">
        <div className="logo-div">
          <img src={logo} alt="logo" height={50} width={150} />
        </div>
        <div className="center-div">
          <p className="center-div-item">{t("navbar.home")}</p>
          <p className="center-div-item">{t("navbar.prices")}</p>
          <p className="center-div-item">{t("navbar.contactSales")}</p>
        </div>
        <div className="center-div">
          <Dropdown options={options} direction="ltr">
            <ShipmentSearch />
          </Dropdown>
          <p className="center-div-item">{t("navbar.login")}</p>
          <p className="red-btn" onClick={changeLanguage}>
            {i18n.language === "en" ? "عربي" : "ENG"}
          </p>
        </div>
      </div>
    </div>
  );
};
