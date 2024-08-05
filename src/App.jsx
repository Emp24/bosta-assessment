import "./App.css";
import { Navbar } from "./Components/Molecules/Navbar/Navbar";
import { ShipmentTrackingPage } from "./Components/Pages/ShipmentTrackingPage/ShipmentTrackingPage";

function App() {
  // const [lang, setLang] = useState("en");

  // useEffect(() => {
  //   setLang(window.localStorage.getItem("language"));
  // }, [window.localStorage.getItem("language")]);

  return (
    <>
      <div
        dir={window.localStorage.getItem("language") === "ar" ? "rtl" : "ltr"}
      >
        <Navbar />
        <ShipmentTrackingPage />
      </div>
    </>
  );
}

export default App;
