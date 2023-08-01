import { NavLink} from 'react-router-dom'
import './compCSS/sidebar.css'

export default function Sidebar(){

    return <>
        <div className="sidebar">
            <div className="sidebar-content">
                    <li>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/department'>Department Management</NavLink>
                    </li>
                    <li>
                        <NavLink to='/managebot'>Manage Bot</NavLink>
                    </li>
                    <li>
                        <NavLink to='/help'>Help & Queries Management</NavLink>
                    </li>
            </div>
        </div>
    </>
}