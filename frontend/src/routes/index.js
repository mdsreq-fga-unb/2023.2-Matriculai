import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import TrilhasList from "../pages/ExclusionTrilhas";
import ElectivesList from "../pages/ExclusionEletivas"
import CreateEletivas from "../pages/CreateEletivas";
import CreateTrilhas from "../pages/CreateTrilhas";
import ExclusionTrilhas from "../pages/ExclusionTrilhas";
import ExclusionEletivas from "../pages/ExclusionEletivas";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/eletivas" element={<ExclusionEletivas />} />
          <Route path="/trilhas" element={<ExclusionTrilhas />} />
          <Route exact path="/criar-eletiva" element={<CreateEletivas />} />
          <Route exact path="/criar-trilha" element={<CreateTrilhas />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
