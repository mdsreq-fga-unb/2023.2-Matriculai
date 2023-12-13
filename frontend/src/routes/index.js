import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ExclusionEletivas from "../pages/ExclusionEletivas";
import CreateEletivas from "../pages/CreateEletivas";
import CreateTrilhas from "../pages/CreateTrilhas";
import ExclusionTrilhas from "../pages/ExclusionTrilhas";
import Recommendations from "../pages/Recommendations";
import SendStudent from "../pages/SendStudents";
import RegistrationPeriod from "../pages/RegistrationPeriod"
import ChoiceList from "../pages/ChoiceList"
import ListElectives from "../pages/ListElectives"
import ListLearningPath from "../pages/ListLearningPath"

const RoutesApp = () => {
  const { isAuthenticated, isSuperUser } = useAuth();

  isSuperUser()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/signin" />} />
  
        {isSuperUser() ? (
          <>
            <Route
              path="/home"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <Home />
              }
            />
            <Route
              path="/cadastrar-estudantes"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <SendStudent />
              }
            />
            <Route
              path="/criar-eletiva"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <CreateEletivas />
              }
            />
            <Route
              path="/excluir-eletivas"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <ExclusionEletivas />
              }
            />
            <Route
              path="/criar-trilha"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <CreateTrilhas />
              }
            />
            <Route
              path="/excluir-trilha"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <ExclusionTrilhas />
              }
            />
            <Route
              path="/recommendations"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <Recommendations />
              }
            />
            <Route
              path="/periodo-matriculas"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <RegistrationPeriod />
              }
            />
            <Route
              path="/lista"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <ChoiceList />
              }
            />
            <Route
              path="/eletivas"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <ListElectives />
              }
            />
            <Route
              path="/trilhas"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <ListLearningPath />
              }
            />
          </>
        ) : (
          <Route
            path="/home"
            element={
              !isAuthenticated() ? <Navigate to="/signin" /> : <Home />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

