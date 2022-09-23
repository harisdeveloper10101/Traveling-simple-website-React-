import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import HomeSubHeading from "./Components/HomeSubHeading/HomeSubHeading";
import News from "./Components/News/News";
import Hoteling from "./Components/Hoteling/Hoteling";
import TourAids from "./Components/TourAids/TourAids"
import Destinations from "./Components/Destinations/Destinations";
import FooterComponent from "./Components/Footer/FooterComponent";



function App() {
  return (
    
    <div className="app">
      <News />
      <Header />
      <Home />
      <HomeSubHeading />
      <Hoteling />
      <TourAids />
      <Destinations />
      <FooterComponent />
    </div>
   
  );
}

export default App;
