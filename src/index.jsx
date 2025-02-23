import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Help from "./components/Help";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { PropertyDetails, Properties } from "./components/Properties";
import { SignIn, SignUp } from "./components/Signing.jsx";
import Home from "./components/Home.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Footer from "./components/LandingPage.jsx";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "landingPage",
        element: <LandingPage />,
        errorElement: <Error />,
      },
      { path: "home", element: <Home />, errorElement: <Error /> },
      { path: "signin", element: <SignIn />, errorElement: <Error /> },
      { path: "signup", element: <SignUp />, errorElement: <Error /> },
      { path: "properties", element: <Properties />, errorElement: <Error /> },
      {
        path: "property",
        element: <PropertyDetails />,
        errorElement: <Error />,
      },
      { path: "profile", element: <Profile />, errorElement: <Error /> },
      { path: "about", element: <About />, errorElement: <Error /> },
      { path: "help", element: <Help />, errorElement: <Error /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
