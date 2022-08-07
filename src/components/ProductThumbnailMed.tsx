import * as React from "react";

interface ProductDetails {
	id: string;
	title: string;
	price: string;
	category?: string;
	description?: string;
	image?: string;
}

export default function ProductThumbnailMed({ id, title, price, category, description, image }: ProductDetails) {
	return (
		<li className="p-4 bg-white max-w-48" key={id}>
			<img src={image} alt="Product Thumbnail" className="bg-slate-500 h-36" />
			<p className="my-2 text-lg font-semibold text-slate-900 text-ellipsis">{title}</p>
			<p className="text-xl font-bold text-slate-900">$ {price}</p>
		</li>
	);
}
