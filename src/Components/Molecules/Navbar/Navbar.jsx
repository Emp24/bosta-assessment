import { useTranslation } from "react-i18next";
import "./Navbar.css";
import arabiclogo from "../../../assets/Images/logo-arabic.svg";
import englishLogo from "../../../assets/Images/logo-english.svg";
import Dropdown from "../Dropdown/Dropdown";
import { ShipmentSearch } from "../ShipmentSearch/ShipmentSearch";
import burgerMenuIcon from "../../../assets/Icons/burger-menu.svg";
import { useState } from "react";
export const Navbar = () => {
  const { t, i18n } = useTranslation();

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="main-container">
      <div className="main-inner-container">
        <div className="logo-div">
          <img
            src={i18n.language === "ar" ? arabiclogo : englishLogo}
            alt="logo"
            height={50}
            width={150}
          />

          <img
            src={burgerMenuIcon}
            width={50}
            height={50}
            alt="burger-menu"
            className="burger-menu"
            onClick={toggleMenu}
          />
        </div>

        <div className={`center-div ${isOpen ? "open" : ""}`}>
          <p className="center-div-item">{t("navbar.home")}</p>
          <p className="center-div-item">{t("navbar.prices")}</p>
          <p className="center-div-item">{t("navbar.contactSales")}</p>
        </div>
        <div className={`center-div ${isOpen ? "open" : ""}`}>
          <Dropdown
            direction={i18n.language === "ar" ? "rtl" : "ltr"}
            title={t("navbar.track-your-shipment")}
          >
            <ShipmentSearch
              direction={i18n.language === "ar" ? "rtl" : "ltr"}
            />
          </Dropdown>
          <p className="center-div-item">{t("navbar.login")}</p>
          <p className="red-btn" onClick={changeLanguage}>
            {i18n.language === "en" ? "عربي" : "ENG"}
          </p>
        </div>
      </div>
    </nav>
  );
};
