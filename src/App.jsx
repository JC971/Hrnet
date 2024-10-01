import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom"

import { FormEmployee } from "./pages/FormEmployee";
import { ListEmployee } from "./pages/ListEmployee";

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <FormEmployee />,
	},
	{
		path: "/list",
		element: <ListEmployee />,
	  },
  ]);

function App() {
	
	return (
		<RouterProvider router={router} />
	);
}

export default App;
