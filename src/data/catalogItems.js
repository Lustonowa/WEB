// src/data/catalogItems.js
import Coke from "../assets/images/CatalogCards/Coke.jpg";
import Carrot from "../assets/images/CatalogCards/Carrot.jpg";
import Tomato from "../assets/images/CatalogCards/Tomato.jpg";
import PepsiImg from "../assets/images/CatalogCards/Pepsi.jpg"

export const INITIAL_CATALOG_ITEMS = [
	{
		id: "coca-cola-330",
		title: "Coca-Cola 330 ml",
		description: "Classic cola.",
		price: 1.49,
		image: Coke,
		alt: "Red 330 ml can of Coca-Cola",
		type: "drink",
		size: "small",
	},
	{
		id: "pepsi-500",
		title: "Pepsi 500 ml",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
		price: 2.19,
		image: PepsiImg,
		alt: "Blue 500 ml can of Pepsi",
		type: "drink",
		size: "large",
	},
	{
		id: "Carrot-350",
		title: "Nutella 350 g",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
		price: 5.99,
		image: Carrot,
		alt: "Carrot, 350 g",
		type: "vegatable",
		size: "medium",
	},
	{
		id: "peanut-butter-340",
		title: "Tomato 350 g",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
		price: 3.79,
		image: Tomato,
		alt: "Tomato, 350 g",
		type: "vegatable",
		size: "medium",
	},

];
