import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SingleTrip from "./pages/SingleTrip";
import { TripsProvider } from './context/TripsContext.jsx'
import CreateTrip from "./pages/CreateTrip.jsx";

function App() {
  return (
    <TripsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/singletrip/:id' element={<SingleTrip />} />
            <Route path="/createtrip" element={<CreateTrip/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TripsProvider>
  );
}

export default App;
