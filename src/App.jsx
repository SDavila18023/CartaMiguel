import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import NotFoundPage from "./utils/NotFoundPage";
import ValentinePage from "./pages/ValentinPage";

const routes = [
  { path: "/", element: <ValentinePage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/inventario", element: <InventoryPage /> },
  {path: "*", element: <NotFoundPage />}
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
