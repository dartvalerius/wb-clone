const cart = document.querySelector(".cart");
document.querySelector("#cartOpen").addEventListener("click", () => cart.showModal());
document.querySelector('.cart-btn-close').addEventListener("click", () => cart.close());



const view = document.querySelector(".view");
document.querySelector(".good-card__img").addEventListener("click", () => view.showModal());
document.querySelector('.view-btn-close').addEventListener("click", () => view.close());

