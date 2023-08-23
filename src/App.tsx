import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contacts from "./pages/Contacts";
import RootLayout from "./layout/RootLayout";
import Charts from "./pages/Charts";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Contacts />} />
      <Route path="/charts" element={<Charts />} />

      {/* 404 Error Page */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
