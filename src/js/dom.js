// создание карточки товара
const createGoodCard = (good) => {

}

// создание слайда товара по скидке
const createGoodDiscoutSlide = (good) => {

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

// отризовка слайдов
const renderDiscountSlides = (goods) => {
    const goodDiscountSlider = document.querySelector(".swiper-wrapper");
    goodDiscountSlider.innerHTML = "";

    goods
        .filter(good => good.discount > 0)
        .forEach(good => goodDiscountSlider.append(createGoodDiscoutSlide(good)));
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

    img.setAttribute("src", `img/goods/${id}/${isBig ? good.id + "-big" : good.id}.jpg`);
    img.setAttribute("alt", good.name);

    return img;
}