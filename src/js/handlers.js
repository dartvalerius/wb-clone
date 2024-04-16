import { goods, cartData } from "./data.js";
import { createGoodImage, renderCards, renderCart } from "./dom.js";
import { setData } from "./local-storage-data.js";
import { cartName } from "./_variables.js";

const regViewClose = () => {
    const view = document.querySelector(".view");
    view.querySelector('.view-btn-close').addEventListener("click", () => view.close());
}

const regCartDialogHandlers = () => {
    const cart = document.querySelector(".cart");
    document.querySelector("#cartOpen").addEventListener("click", () => cart.showModal());
    cart.querySelector('.cart-btn-close').addEventListener("click", () => cart.close());

    document.querySelector(".cart-btn-clear").addEventListener("click", () => {
        document.querySelector(".cart-list").innerHTML = "";
        document.querySelector(".cart-total").textContent = "Итого: 0 р.";

        cartData.length = 0;
        setData(cartName, cartData);
    })
}

const regSearchHandler = () => {
    const search = document.querySelector("#inputSearch");
    search.addEventListener("input", (e) => {
        const result = goods.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase()));
        renderCards(result)
    });
}

const showBigImageHandler = (e) => {
    const id = e.target.closest(".good-card").getAttribute("data-card-id");
    const view = document.querySelector(".view");
    view.querySelector("img").remove();

    view.append(createGoodImage(goods.find(x => x.id === id), true));
    view.showModal();
    e.target.closest(".good-card").scrollIntoView();
}

const addCartHandler = (e) => {
    const id = e.target.closest(".good-card").getAttribute("data-card-id");

    if(cartData.find(x => x.id === id)) return;

    const cartDataItem = {
        id: id,
        count: 0
    }
    cartData.push(cartDataItem)

    setData(cartName, cartData);

    renderCart(cartData);
}

const removeCartItem = (e) => {
    const id = e.target.closest(".cart-list__item").getAttribute("data-cart-id");

    cartData.splice(cartData.indexOf(cartData.find(x => x.id === id)), 1);

    setData(cartName, cartData);

    renderCart(cartData);
}

export {
    regViewClose,
    regCartDialogHandlers,
    regSearchHandler,

    showBigImageHandler,
    addCartHandler,
    removeCartItem
}