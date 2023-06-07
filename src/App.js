import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import LeftMenu from "./Components/LeftMenu";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="row">
          <div className="col-md-2">
            <LeftMenu />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route
                path="/product-details/:id"
                element={<ProductInfo />}
              ></Route>

              <Route
                path="/category/:string"
                element={<CategoryProducts />}
              ></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
