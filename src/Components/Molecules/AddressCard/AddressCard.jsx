import { useTranslation } from "react-i18next";
import "./AddressCard.css";
export const AddressCard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="delivery-address-title">
        {t("delivery-address.delivery-address")}
      </h1>
      <div className="delivery-address-container">
        <p>
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٢٢ ,,,
          Cairo
        </p>
      </div>
    </div>
  );
};
