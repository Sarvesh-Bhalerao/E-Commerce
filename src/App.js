import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigate from "./components/routes/navigation-bar/navigation.component";
import Authentication from "./components/routes/Authentication/authentication.component";
import Shop from "./components/routes/Shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate />}>
        {/*  index used for index element 
  when it get render with path / home will also get rendered*/}
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
