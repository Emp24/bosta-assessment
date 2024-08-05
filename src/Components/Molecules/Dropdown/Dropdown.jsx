import "./Dropdown.css";
const Dropdown = ({ options, direction, children }) => {
  return (
    <div className={`dropdown ${direction}`}>
      <p className="red-btn">Track your shipment</p>
      <div className="dropdown-menu">{children}</div>
    </div>
  );
};

export default Dropdown;