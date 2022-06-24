import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigate from "./components/routes/navigation-bar/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate />}>
        {/*  index used for index element 
  when it get render with path / home will also get rendered*/}
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
