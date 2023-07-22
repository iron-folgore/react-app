import { useOutletContext } from "react-router-dom";
import { PageContainer, Heading, Flex } from "~/elements";
import { ReactComponent as MenuIcon } from "~/images/expand-sidebar.svg";

export default function TopPage() {
	const { path } = useOutletContext();
	return (
		<>
			{console.log("path", path == "")}
			<PageContainer>
				<Flex>
					<MenuIcon />
					<Heading>Welcome to {path == "" ? "Top Page" : path}!</Heading>
				</Flex>
			</PageContainer>
		</>
	);
}
