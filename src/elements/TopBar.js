import { Link } from "react-router-dom";

export function TopBar({ children }) {
	return <div className="min-w-screen bg-black h-12 flex">{children}</div>;
}

function Item({ children, to }) {
	return (
		<Link to={to} className="min-w-fit h-full">
			<div className="flex w-full border-r border-white h-full px-5">
				<span className="self-center text-white">{children}</span>
			</div>
		</Link>
	);
}

TopBar.Item = Item;
