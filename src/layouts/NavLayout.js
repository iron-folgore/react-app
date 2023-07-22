import { Outlet, useLocation } from "react-router-dom";
import { ScreenWrapper, SideBar, TopBar } from "~/elements";

export function NavLayout() {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	return (
		<>
			<TopBar>
				<TopBar.Item to="/aaa">aaa</TopBar.Item>
				<TopBar.Item to="/bbb">bbb</TopBar.Item>
				<TopBar.Item to="/ccc">ccc</TopBar.Item>
			</TopBar>
			<ScreenWrapper>
				<SideBar>
					<SideBar.Item to="/">top</SideBar.Item>
					<SideBar.Item to="/page1">page1</SideBar.Item>
					<SideBar.Item to="/page2">page2</SideBar.Item>
					<SideBar.Item to="/page3">page3</SideBar.Item>
				</SideBar>
				<Outlet context={{ path: path }} />
			</ScreenWrapper>
		</>
	);
}
