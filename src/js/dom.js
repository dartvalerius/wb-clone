import goodImg from "../img/goods/*/*.jpg";
import { goods } from "./data";
import { showBigImageHandler, addCartHandler, removeCartItem } from "./handlers.js";

// создание карточки товара
const createGoodCard = (good) => {
    const imgContainer = createDivContainer("good-card__img", [createGoodImage(good)]);
    imgContainer.addEventListener("click", showBigImageHandler);
    const titleContainer = createDivContainer("good-card__title", [document.createTextNode(`${good.name}`)]);
    
    const discountContainer = createDivContainer("good-card__discount", [document.createTextNode(`-${good.discount}%`)]);
    if(good.discount === 0) discountContainer.style.display = "none";
    
    const buttonContainer = createDivContainer("good-card__btn", [createDivContainer("btn-cart", [document.createTextNode("В корзину")])])
    buttonContainer.addEventListener("click", addCartHandler);
    const priceContainer = createDivContainer("good-card__price");
    if(good.discount > 0) {
        priceContainer.append(createDivContainer("full-price", [document.createTextNode(`${good.price} р.`)]),
            createDivContainer("discount", [document.createTextNode(`${good.price - good.price * good.discount / 100} р.`)]));
    } else {
        priceContainer.append(createDivContainer("price", [document.createTextNode(`${good.price} р.`)]));
    }

    const cartContainer = createDivContainer("good-card", [imgContainer, titleContainer, priceContainer, buttonContainer, discountContainer]);
    cartContainer.setAttribute("data-card-id", good.id)

    return cartContainer;
}

// создание слайда товара по скидке
const createGoodDiscountSlide = (good) => {
    const imgContainer = createDivContainer("slide__img", [createGoodImage(good)]);

    const nameContainer = createDivContainer("slide__info-name", [document.createTextNode(`${good.name}`)]);
    const priceContainer = createDivContainer("slide__info-price", [document.createTextNode(`${good.price - good.price * good.discount / 100} р.`)]);
    const infoContainer = createDivContainer("slide__info", [nameContainer, priceContainer])

    return createDivContainer("swiper-slide", [createDivContainer("slide", [imgContainer, infoContainer])]);
}

// создание позиции товара для корзины
const createGoodItemCart = (cartItem) => {
    const li = document.createElement("li");
    li.setAttribute("data-cart-id", cartItem.good.id);
    li.setAttribute("class", "cart-list__item");

    const goodNameContainer = createDivContainer("good-name", [document.createTextNode(cartItem.good.name)]);
    const goodPriceContainer = createDivContainer("good-price", [document.createTextNode(`${cartItem.good.price - cartItem.good.price * (cartItem.good.discount / 100)} р.`)]);
    const btn = createDivContainer("btn-remove", [document.createTextNode("удалить")]);
    btn.addEventListener("click", removeCartItem);
    li.append(goodNameContainer, goodPriceContainer, btn);

    return li;
}

// отрисовка сообщения загрузки
const renderLoadMessage = (message) => {
    const goodCardWrapper = document.querySelector(".good-card-wrapper");
    goodCardWrapper.innerHTML = "";

    const messageContainer = document.createElement("h2");
    messageContainer.textContent = message;

    goodCardWrapper.append(messageContainer)
}

// отрисовка корзины
const renderCards = (goods) => {
    const goodCardWrapper = document.querySelector(".good-card-wrapper");
    goodCardWrapper.innerHTML = "";

    goods.forEach(good => goodCardWrapper.append(createGoodCard(good)));
}

// отрисовка слайдов
const renderDiscountSlides = (goods) => {
    const goodDiscountSlider = document.querySelector(".swiper-wrapper");
    goodDiscountSlider.innerHTML = "";

    goods
        .filter(good => good.discount > 0)
        .forEach(good => goodDiscountSlider.append(createGoodDiscountSlide(good)));
}

// отрисовка козины
const renderCart = (cartData) => {
    const cartList = document.querySelector(".cart-list");
    cartList.innerHTML = "";

    const cartItems = cartData.map(x => {
        return {
            good: goods.find(good => good.id === x.id)
        }
    })

    cartItems.forEach(x => cartList.append(createGoodItemCart(x)));
    const total = cartItems.reduce((sum, x) => sum + (x.good.price - x.good.price * (x.good.discount / 100)), 0)
    document.querySelector(".cart-total").textContent = `Итого: ${total} р.`;
}

// создать элемент изображения товара
const createGoodImage = (good, isBig = false) => {
    const img = document.createElement("img");

    img.setAttribute("src", goodImg[good.id][isBig ? good.id + "-big" : good.id]);
    img.setAttribute("alt", good.name);

    return img;
}

// создать контейнер
const createDivContainer = (className, appendElements) => {
    const div = document.createElement("div");

    if(className) div.setAttribute("class", className);
    if(appendElements) div.append(...appendElements);

    return div;
}

export {
    renderLoadMessage,
    renderCards,
    renderCart,
    renderDiscountSlides,
    createGoodImage
}