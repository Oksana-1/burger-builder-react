import axios from "./axios-order";
const URLS = {
	ingredients: "/ingredients.json",
	order: "/orders.json",
}
export default class BurgerBuilderApi {
		async getIngredients() {
			try {
				return await axios.get(URLS.ingredients);
			} catch (e) {
				console.error(e);
			}
		}
		async orderBurger(order) {
			try {
				return await axios.post(URLS.order, order)
			} catch (e) {
				console.error(e);
			}
		}
}
