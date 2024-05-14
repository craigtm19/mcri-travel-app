import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExamplePage from "./pages/ExamplePage/ExamplePage";
import FlightInfo from "./pages/FlightInfo/FlightInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "example",
    element: <FlightInfo />,
  },
  // {
  //   path: "packing",
  //   element: <PackingList />,
  // },
  {
    path: "FlightInfo",
    element: <FlightInfo />,
  },
  // {
  //   path: "sightseeing",
  //   element: <Sightseeing />,
      // },
]);
