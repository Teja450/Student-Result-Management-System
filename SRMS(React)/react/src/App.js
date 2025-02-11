import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "./Desktop/RootLayout";
import Error from "./Desktop/Error";
import About from "./Desktop/About";
import Student from "./Desktop/Student";
import Faculty from "./Desktop/Faculty";
import Admin from "./Desktop/Admin";
import Query from "./Desktop/Query";
import Result from "./Pages/Result";
import ResultView from "./Pages/ResultView";
import AddStudent from "./Pages/AddStudent";
import AddFaculty from "./Pages/AddFaculty";
import View from "./Pages/View";
import AddResult from "./Pages/AddResult";
import AddOrUpdateResult from "./Pages/AddOrUpdateResult";
import UpdateResult from "./Pages/UpdateResult";
import AdminView from "./Pages/AdminView";
import FacultyView from "./Pages/FacultyView";
import Home from "./Desktop/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/About", element: <About /> },
      { path: "/", element: <Home /> },
      { path: "/studentlogin", element: <Student /> },
      { path: "/facultylogin", element: <Faculty /> },
      { path: "/adminlogin", element: <Admin /> },
      { path: "/query", element: <Query /> },
      { path: "/studentlogin/result", element: <Result /> },
      { path: "/studentlogin/result/resultview", element: <ResultView /> },
      { path: "/adminlogin/adminview/addstudent", element: <AddStudent /> },
      { path: "/adminlogin/adminview/addfaculty", element: <AddFaculty /> },
      { path: "/adminlogin/adminview/viewquery", element: <View /> },
      { path: "/facultylogin/facultyview/addresult", element: <AddResult /> },
      { path: "/facultylogin/facultyview/addorupdateresult", element: <AddOrUpdateResult /> },
      { path: "/facultylogin/facultyview/updateresult", element: <UpdateResult /> },
      { path: "/adminlogin/adminview", element: <AdminView /> },
      { path: "/facultylogin/facultyview", element: <FacultyView /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer 
         position="top-right"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
      />
    </>
  );
}
export default App;
