import "./Dropdown.css";
const Dropdown = ({ direction, children, title }) => {
  return (
    <div className={`dropdown ${direction}`}>
    <p className="red-btn">{title}</p>
      <div className="dropdown-menu">{children}</div>
    </div>
  );
};

export default Dropdown;
