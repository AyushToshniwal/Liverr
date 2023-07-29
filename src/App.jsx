import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from "./pages/gig/Gig";
import Orders from './pages/orders/Orders';
import MyGigs from './pages/mygigs/MyGigs';
import Add from './pages/add/Add';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import "./App.scss";

import{
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Featured from './components/featured/Featured';

function App() {
  const Layout = () => {
    return(
      <div className="app">
        <Navbar />
		{/* <Featured */}
		<Outlet />
        <Footer />
      </div>
    );
  };


 const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/gigs",
					element: <Gigs />,
				},
				{
					path: "/gig/:id",
					element: <Gig />,
				},
				{
					path: "/orders",
					element: <Orders />,
				},
				{
					path: "/mygigs",
					element: <MyGigs />,
				},
				{
					path: "/add",
					element: <Add />,
				},
				{
					path: "/message/:id",
					element: <Message />,
				},
				{
					path: "/messages",
					element: <Messages />,
				},
		       ],}
 ]);

  return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App
