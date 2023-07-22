import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import TopPage from "~/pages/TopPage";

export default function AppRoute() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <NavLayout />,
			children: [
				{
					path: "/",
					element: <TopPage />,
				},
				{
					path: "/aaa",
					element: <TopPage />,
				},
				{
					path: "/bbb",
					element: <TopPage />,
				},
				{
					path: "/ccc",
					element: <TopPage />,
				},
				{
					path: "/page1",
					element: <TopPage />,
				},
				{
					path: "/page2",
					element: <TopPage />,
				},
				{
					path: "/page3",
					element: <TopPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
