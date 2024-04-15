import goodImg from "../img/goods/*/*.jpg";

// создание карточки товара
const createGoodCard = (good) => {
    const imgContainer = createDivContainer("good-card__img", [createGoodImage(good)]);
    const titleContainer = createDivContainer("good-card__title", [document.createTextNode(`${good.name}`)]);
    
    const discountContainer = createDivContainer("good-card__discount", [document.createTextNode(`-${good.discount}%`)]);
    if(good.discount === 0) discountContainer.style.display = "none";
    
    const buttonContainer = createDivContainer("good-card__btn", [createDivContainer("btn-cart", [document.createTextNode("В корзину")])])
    
    const priceContainer = createDivContainer("good-card__price");
    if(good.discount > 0) {
        priceContainer.append(createDivContainer("full-price", [document.createTextNode(`${good.price} р.`)]),
            createDivContainer("discount", [document.createTextNode(`${good.price - good.price * good.discount / 100} р.`)]));
    } else {
        priceContainer.append(createDivContainer("price", [document.createTextNode(`${good.price} р.`)]));
    }

    const cartContainer = createDivContainer("good-card", [imgContainer, titleContainer, priceContainer, buttonContainer, discountContainer]);
    cartContainer.setAttribute("data-cart-id", good.id)

    return cartContainer;
}

// создание слайда товара по скидке
const createGoodDiscountSlide = (good) => {

}

// создание позиции товара для корзины
const createGoodItemCart = (good) => {

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
const renderCart = (goods) => {
    const cartList = document.querySelector(".cart-list");
    cartList.innerHTML = "";

    goods.forEach(good => cartList.append(createGoodItemCart(good)));
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
    renderCards,
    renderCart,
    renderDiscountSlides
}