import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterVehicles from "./pages/CreateVehicles"
import EditVehicle from "./pages/EditVehicle"
import Filter from "./pages/Filter"
import VehiclesPage from "./pages/Vehicles"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VehiclesPage />} />
                <Route path="/register" element={<RegisterVehicles />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/:id" element={<EditVehicle />} />
            </Routes>
        </BrowserRouter>
    )
}