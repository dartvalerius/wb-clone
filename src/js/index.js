import { listAsync, goods, cartItems } from "./data.js";
import { renderCards, renderCart, renderDiscountSlides} from "./dom.js"
import goodImg from "../img/goods/*/*.jpg";

const cart = document.querySelector(".cart");
document.querySelector("#cartOpen").addEventListener("click", () => cart.showModal());
document.querySelector('.cart-btn-close').addEventListener("click", () => cart.close());



const view = document.querySelector(".view");
document.querySelector(".good-card__img").addEventListener("click", () => view.showModal());
document.querySelector('.view-btn-close').addEventListener("click", () => view.close());

(async function(){
    try {
        await listAsync();
        console.log(goodImg)
        renderCards(goods);
    }
    catch (e) {
        console.log("Ошибка получения товаров")
        console.log(e);
    }
})()