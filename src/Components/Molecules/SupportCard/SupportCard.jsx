import "./SupportCard.css";
import supportImage from "../../../assets/Images/support-img.jpg";
import { useTranslation } from "react-i18next";
export const SupportCard = () => {
  const { t } = useTranslation();
  return (
    <div className="support-card-container">
      <div>
        <img src={supportImage} height={150} width={150} />
      </div>
      <div className="support-card-details">
        <h1 className="support-card-title">{t("support.title")}</h1>
        <button className="support-card-button">{t("support.button")}</button>
      </div>
    </div>
  );
};
