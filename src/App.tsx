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
import AddContact from "./pages/AddContact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Contacts />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/add" element={<AddContact />} />

      {/* 404 Error Page */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
