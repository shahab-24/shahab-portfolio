import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";
import ProjectsSection from "./Components/ProjectsSection";
import AboutMe from "./Components/AboutMe";
import ProjectDetails from "./Components/ProjectDetails";
import ServicesCard from "./Components/ServicesCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
      ,
      {
        path: "project",
        element: <ProjectsSection></ProjectsSection>,
      },
      
      {
        path: "about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path:'services',
        element: <ServicesCard></ServicesCard>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
