import * as React from "react";

import useConfig from "./components/useConfig";

import Header from "./components/Header";
import ProductThumbnailMed from "./components/ProductThumbnailMed";

/**
 * Our Web Application
 */
export default function App() {
	const config = useConfig();
	const productList = [
		["Test Product ", "199.99"],
		["Test Product ", "49.99"],
		["Test Product ", "219.99"],
		["Test Product ", "2119.99"],
		["Test Product ", "125.99"],
		["Test Product ", "1250000.00"],
	];

	return (
		<div className="w-full h-screen bg-slate-200">
			<Header />
			<ul className="grid max-w-4xl grid-cols-2 gap-4 p-4 mx-auto my-8 sm:grid-cols-3 md:grid-cols-4 bg-slate-100">
				{productList.map(([title, price], index) => (
					<ProductThumbnailMed id={index.toString()} title={title + index.toString()} price={price} />
				))}
			</ul>
		</div>
	);
}
