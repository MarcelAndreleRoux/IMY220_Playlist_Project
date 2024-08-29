import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { PlaylistPage } from "./pages/PlaylistPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SplashLoginPage } from "./pages/SplashLoginPage";
import { SplashLogin } from "./components/SplashLogin";
import { SplashRegister } from "./components/SplashRegister";
import { SplashPage } from "./pages/SplashPage";
import { Song } from "./components/Song";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <SplashLogin />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/register",
    element: <SplashRegister />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/spash",
    element: <SplashPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/playlist",
    element: <PlaylistPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/song/:songId",
    element: <Song />,
    errorElement: <div>404 Not Found</div>,
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router}></RouterProvider>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
