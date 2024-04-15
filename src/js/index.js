import { listAsync, goods, cartItems } from "./data.js";

const cart = document.querySelector(".cart");
document.querySelector("#cartOpen").addEventListener("click", () => cart.showModal());
document.querySelector('.cart-btn-close').addEventListener("click", () => cart.close());



const view = document.querySelector(".view");
document.querySelector(".good-card__img").addEventListener("click", () => view.showModal());
document.querySelector('.view-btn-close').addEventListener("click", () => view.close());

(async function(){
    try {
        await listAsync();
        console.log(goods);
    }
    catch (e) {
        console.log("Ошибка получения товаров")
    }
})()