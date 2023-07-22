import classNames from "classnames";
import { Link } from "react-router-dom";

export function SideBar({ children }) {
	const className = classNames("min-h-screen w-72 bg-neutral-300");
	return <div className={className}>{children}</div>;
}

function Item({ children, to }) {
	const divClass = classNames(
		"w-full h-10 border-b border-neutral-500 px-5 flex items-center"
	);
	return (
		<Link to={to}>
			<div className={divClass}>
				<span className="text-base">{children}</span>
			</div>
		</Link>
	);
}

SideBar.Item = Item;
