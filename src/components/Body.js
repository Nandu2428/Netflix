import Login from "./Login";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
import Err from "./Err";
import {createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
const Body = () => {
  
  //const navigate = useNavigate();
  
  const appRouter = createBrowserRouter([
     {
       path: "/",
       element: <Login />,
     },
     {
       path: "/browse",
       element: <Browse />,
    },
    {
      path: "/moviedetails/:movieId",
      element:<MovieDetails/>
    },
    {
       errorElement: <Err />,
    },
     
  ]);

  
 



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
};
export default Body;
