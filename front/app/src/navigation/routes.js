// Route parameters for navigation
import ClientView from "../screens/client.js";
import HomeView from "../screens/home.js";
import AdminView from "../screens/admin.js";
import DeskOfficerView from "../screens/deskOfficer.js";
import LoginView from "../screens/login.js";

const routes=[
    {
        "path": "/",
        "key": "Home",
        "screen": <HomeView/> 
    },
    {
        "path": "/client",
        "key": "client",
        "screen": <ClientView/> 
    },
    {
        "path": "/admin",
        "key": "admin",
        "screen": <AdminView/> 
    },
    {
        "path": "/desk-officer",
        "key": "desk-officer",
        "screen": <DeskOfficerView/> 
    },
    {
        "path": "/login",
        "key": "login",
        "screen": <LoginView/> 
    }
]

export default routes;