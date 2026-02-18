import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './front/components/header.jsx';
import Footer from './front/components/footer.jsx';
import Home from './front/pages/home.jsx';
import Iphone from './front/pages/iphones.jsx';
import Mac from './front/pages/mac.jsx';
import iPad from './front/pages/ipad.jsx';
import Watch from './front/pages/Watch.jsx';
import Vision from './front/pages/Vision.jsx';
import AirPods from './front/pages/AirPods.jsx';
import TvHome from './front/pages/TvHome.jsx';
import Entertainment from './front/pages/Entertainment.jsx';
import Accessories from './front/pages/Accessories.jsx';
import Support from './front/pages/Support.jsx';
import Store from './front/pages/Store.jsx';
import Four404 from './front/pages/four404.jsx';
import ProductPage from './front/pages/productpage.jsx';
// You need to import Shared if you're using it
// import Shared from './front/components/Shared.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Add Header here */}
        <Routes>
          {/* If you want to use Shared layout, uncomment this: */}
          {/* <Route element={<Shared />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/ipad" element={<iPad />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/getproducts/:productUrl" element={<ProductPage />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/airpods" element={<AirPods />} />
            <Route path="/tv-home" element={<TvHome />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Four404 />} />
          {/* </Route> - Close Shared here if you used it */}
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;