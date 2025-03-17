
import Leftbar from "./Components/Leftbar/Leftbar";
import Navbar from "./Components/Navbar/Navbar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Login from "./pages/login/login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/register/register";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,

  
  
} from "react-router-dom";


function App() {

  const currentUser = true;
  
  const Layout = ()=>{
    return(
      <div className="theme-light">
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children})=>{
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children :[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);


  

 

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
