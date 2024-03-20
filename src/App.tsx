import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import AllCharacters from "./pages/AllCharacters";

import CharacterPg from "./pages/CharacterPg";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/characters",
        element: <AllCharacters />,
      },
      {
        path: "/:id",
        element: <CharacterPg />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
