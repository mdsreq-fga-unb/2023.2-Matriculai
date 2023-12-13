import React from "react";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
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
import StudentHome from "../pages/StudentHome"
import NewEnrolmentLP from "../pages/NewEnrolmentLP"
import ListLearningPath from "../pages/ListLearningPath"
import ListElectives from "../pages/ListElectives"
import StudentsLP from "../pages/StudentsLP";

const RoutesApp = () => {
  const { isAuthenticated, isSuperUser } = useAuth();
  let typeUser = isSuperUser()
  console.log('type:', typeUser == 'true')



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/signin" />} />
  
        {typeUser === 'true' ? (
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
              path="/excluir-trilhas"
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
              path="/trilhas"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <ListLearningPath />
              }
            />
            <Route
              path="/trilhas/:trilhaId"
              element={
                !isAuthenticated() ? ( <Navigate to="/signin" /> ) : (<StudentsLP />)
              }
            />
            <Route
              path="/eletivas"
              element={
                !isAuthenticated() ? <Navigate to="/signin" /> : <ListElectives />
              }
            />
          </>
        ) : (
          <>
            <Route
            path="/home-student"
            element={
              !isAuthenticated() ? <Navigate to="/signin" /> : <StudentHome />
            }
          />
          <Route
            path="/matricula-trilha"
            element={
              !isAuthenticated() ? <Navigate to="/signin" /> : <NewEnrolmentLP />
            }
          />
          </>
          
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

