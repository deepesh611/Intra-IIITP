
import './App.css';
import PreNavbar from './components/PreNavbar';
// import Navbar from "./components/Navbar.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.jsx"
import data from "./data/data.json"
import Offers from "./components/Offers.jsx"
import Heading from "./components/Heading.jsx"
// import StarProduct from "./components/StarProduct.jsx"
// import HotAccessories from "./components/HotAccessories.jsx"
// import ProductReviews from "./components/ProductReviews.jsx"
import Banner from "./components/Banner.jsx"
import Footer from "./components/Footer.jsx"
// import NavOptios from "./components/NavOptios.jsx"
import Forms from './components/Forms.jsx';
import Form1 from './components/Form1.jsx';
import Page2 from './components/Page2.jsx';
// import MyComponent from './components/Data retrival.jsx';
// import Form1 from './components/Form1.jsx';


function App() {
  return (
  
    <Router>
     
      <Routes>
        <Route exact path="/signin" element={<Forms />} />
        {/* <Route exact path="/signup" element={<Form1 />} /> */}
        <Route exact path="/signup" element={<Form1 />} ></Route>
        <Route exact path="/register" element={<Page2 />} ></Route>
        {/* <Route exact path="/chat" element={<MyComponent />} ></Route> */}
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
      </Router>

     
    
  );
}

const DefaultLayout = () => {
  return (
    <>
     <PreNavbar/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading  text="NEWS OUTLETS REPORTED"/>
      <Banner  banner={data.banner}/>
      <Footer footer={data.footer} />
    </>
  );
}

export default App;
