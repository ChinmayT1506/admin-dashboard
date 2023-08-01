import Sidebar from "./sidebar";
import Navbar from "./navbar";
import './compCSS/main.css'
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./dashboard";
import Department from "./department";
import ManageBot from "./managebot";
import Help from "./help";
import Error from "./error";
import Datapage from "./dataPage";
import Datapage2 from "./dataPage2";
import AddDepartment from "./addDepartment";
import EditScreen from "./editScreen";

export default function Main() {
    
    const isUser = JSON.parse(localStorage.getItem('my_item'))

    return (
        <>
            <Navbar />
            <div className="Main">
                <Sidebar />
                <Routes>
                    <Route path="/">
                        <Route index element={<Datapage2 />} />
                        <Route path="/datapage" element={<Datapage />} />
                        <Route path="/addDept" element={<AddDepartment />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/department" element={<Department />} />
                        <Route path="/managebot" element={<ManageBot />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/editScreen" element={<EditScreen />} />
                        <Route path='/*' element={<Error />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}