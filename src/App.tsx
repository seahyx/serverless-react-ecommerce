import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";

/**
 * Our Web Application
 */
export default function App() {
	const config = useConfig();
	return (
		<div className="w-full h-screen bg-gray-200">
			<RetardedButton />
			<RetardedButton />
		</div>
	);
}

function RetardedButton() {
	return (
		<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-100 active:bg-gray-200">
			<div>
				<div className="text-xl font-medium text-primary">ChitChat</div>
				<p className="text-slate-500">You have a new message!</p>
			</div>
		</div>
	)
}
