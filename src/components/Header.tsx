import * as React from "react";

import logo from "../logo.svg";

export default function Header() {
	return (
		<div className="sticky top-0 w-full h-24 bg-cyan-700">
			<div className="h-full max-w-4xl mx-auto">
				<img src={logo} alt="logo" className="h-full transition-all hover:rotate-180 active:scale-95" />
			</div>
		</div>
	);
}
