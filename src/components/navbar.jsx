import { useNavigate } from 'react-router-dom'
import './compCSS/navbar.css'
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {

    const navigate = useNavigate();
    
    function displayLogoutButton(){
        const logoutBar = document.getElementById("logoutBar")
        if (logoutBar.style.display === "none") {
            logoutBar.style.display = "block";
            document.getElementById("logo-name").classList.add("changePos")
          } else {
            logoutBar.style.display = "none";
            document.getElementById("logo-name").classList.remove("changePos")
          }
    }

    function logoutHandler(event) {
        event.preventDefault();
        localStorage.removeItem('my_item')
        // navigate("/")
        window.location.reload();
    }

    return <>
        <div className="navbar">
            <div className="logo-name" id="logo-name" onClick={() => navigate('/')} >
                <img src="images/logo.svg" alt="logo" />
                <h1 >Chatbot <br />Management System</h1>
            </div>
            <div className="profile">
                <div className='profile-1' onClick={displayLogoutButton}>
                    <img src="images/dp.png" alt="profile-pic" />
                    <div className="credentials">
                        <h5>Chinmay</h5>
                        <p>Admin</p>
                    </div>
                </div>
                <div id="logoutBar">
                    <button onClick={logoutHandler}><LogoutIcon /></button>
                </div>
            </div>
        </div>
    </>
}