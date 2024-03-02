// import './App.css';
// import PreNavbar from './components/PreNavbar';
// import Navbar from "./components/Navbar.jsx"
// import {  BrowserRouter as Router,Route,Routes } from "react-router-dom"
// import Slider from "./components/Slider.jsx"
// import data from "./data/data.json"
// import Offers from "./components/Offers.jsx"
// import Heading  from "./components/Heading.jsx"
// import StarProduct from "./components/StarProduct.jsx"
// // import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.jsx"
// import HotAccessories from "./components/HotAccessories.jsx"
// import ProductReviews from "./components/ProductReviews.jsx"
// // import Videos from "./components/Videos.js"
// import Banner from "./components/Banner.jsx"
// import Footer from "./components/Footer.jsx"
// import NavOptios from "./components/NavOptios.jsx"
// import Forms from './components/Forms.jsx';




// function App() {

//   return (
//     <Router>
//       <PreNavbar />
//       <Routes>
//         <Route exact path="/signin" element={<Forms />} />
//         <Route element={<DefaultLayout />} />
//       </Routes>
//     </Router>
//   );
// }



//   return (
//   // <Router>
//   <>
//        <PreNavbar/>
//        <Routes>
//           {/* <Route path="/" exact component={HomePage} /> */}
//           <Route excat path="/signin"  element={<Forms/>} />
          
//           </Routes>
//        <Navbar />
            
//         <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>


//        <Slider start={data.banner.start} />
//        <Offers offer={data.offer} />
//        <Heading text="STAR PRODUCTS"/>
//        <StarProduct starProduct={data.starProduct} />
//        <Heading text="HOT ACCESSORIES" />
//        {/* <HotAccessoriesMenu /> */}

//        <Routes>

// <Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
// </Routes>
//             <Routes>
//        <Route exact path="/smartDevice" element={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
//        </Routes>

//        <Routes>
//        <Route exact path="/home" element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
//        </Routes>

//        <Routes>
//        <Route exact path="/lifestyle" element={ <HotAccessories lifestyle={data.hotAccessories.lifestyle} lifestyleCover={data.hotAccessoriesCover.lifestyle} />} />
//        </Routes>

//        <Routes>
//        <Route exact path="/mobileAccessories" element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
//        </Routes>



  


//        <Heading text="PRODUCT REVIEWS"/>

//        <ProductReviews productReviews={data.productReviews}/>

//        {/* <Heading text="VIDEOS" />
      
//       <Videos videos={data.videos} /> */}

//       <Heading  text="IN THE PRESS"/>
   
//        <Banner  banner={data.banner}/>

//        <Footer footer={data.footer} />



//        </> 
//   //  </Router>

//   );


// export default App;









// import './App.css';
// import PreNavbar from './components/PreNavbar';
// import Navbar from "./components/Navbar.jsx"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Slider from "./components/Slider.jsx"
// import data from "./data/data.json"
// import Offers from "./components/Offers.jsx"
// import Heading from "./components/Heading.jsx"
// import StarProduct from "./components/StarProduct.jsx"
// import HotAccessories from "./components/HotAccessories.jsx"
// import ProductReviews from "./components/ProductReviews.jsx"
// import Banner from "./components/Banner.jsx"
// import Footer from "./components/Footer.jsx"
// import NavOptios from "./components/NavOptios.jsx"
// import Forms from './components/Forms.jsx';

// function App() {

//   return (
//     <Router>
//       <PreNavbar/>
//       <Routes>
//         <Route excat path="/signin"  element={<Forms/>} />
//         <Route path="*" element={<DefaultLayout />} />
//       </Routes>
//       )
//       }
      
//       const DefaultLayout = () => {
// return(
//       <>
//         <Navbar />
//         <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
//         <Slider start={data.banner.start} />
//         <Offers offer={data.offer} />
//         <Heading text="STAR PRODUCTS"/>
//         <StarProduct starProduct={data.starProduct} />
//         <Heading text="HOT ACCESSORIES" />
//         <Routes>
//           <Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
//         </Routes>
//         <Routes>
//           <Route exact path="/smartDevice" element={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/home" element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/lifestyle" element={ <HotAccessories lifestyle={data.hotAccessories.lifestyle} lifestyleCover={data.hotAccessoriesCover.lifestyle} />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/mobileAccessories" element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
//         </Routes>
//         <Heading text="PRODUCT REVIEWS"/>
//         <ProductReviews productReviews={data.productReviews}/>
//         <Heading  text="IN THE PRESS"/>
//         <Banner  banner={data.banner}/>
//         <Footer footer={data.footer} />
//       </>
//     // </Router>
//   );
// }

// export default App;






import './App.css';
import PreNavbar from './components/PreNavbar';
// import Navbar from "./components/Navbar.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.jsx"
import data from "./data/data.json"
import Offers from "./components/Offers.jsx"
import Heading from "./components/Heading.jsx"
import StarProduct from "./components/StarProduct.jsx"
// import HotAccessories from "./components/HotAccessories.jsx"
import ProductReviews from "./components/ProductReviews.jsx"
import Banner from "./components/Banner.jsx"
import Footer from "./components/Footer.jsx"
import NavOptios from "./components/NavOptios.jsx"
import Forms from './components/Forms.jsx';
import Form1 from './components/Form1.jsx';
import Page2 from './components/Page2.jsx';
// import Form1 from './components/Form1.jsx';

function App() {
  return (
  
    <Router>
     
      <Routes>
        <Route exact path="/signin" element={<Forms />} />
        {/* <Route exact path="/signup" element={<Form1 />} /> */}
        <Route exact path="/signup" element={<Form1 />} ></Route>
        <Route exact path="/register" element={<Page2 />} ></Route>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
      </Router>

     
    
  );
}

const DefaultLayout = () => {
  return (
    <>
     <PreNavbar/>
      {/* <Navbar /> */}
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct} />
      {/* <Heading text="HOT ACCESSORIES" />
      <Routes>
        <Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
      </Routes>
      <Routes>
        <Route exact path="/smartDevice" element={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
      </Routes>
      <Routes>
        <Route exact path="/home" element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
      </Routes>
      <Routes>
        <Route exact path="/lifestyle" element={ <HotAccessories lifestyle={data.hotAccessories.lifestyle} lifestyleCover={data.hotAccessoriesCover.lifestyle} />} />
      </Routes>
      <Routes>
        <Route exact path="/mobileAccessories" element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes> */}
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading  text="IN THE PRESS"/>
      <Banner  banner={data.banner}/>
      <Footer footer={data.footer} />
    </>
  );
}

export default App;
