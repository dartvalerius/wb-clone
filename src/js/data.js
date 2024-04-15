import { getData } from "./local-storage-data.js";

let goods = [];

const cartItems = getData("WB-CLONE-CART");

const listAsync = async () => {
    const response = await fetch("https://6612bd5b53b0d5d80f6648aa.mockapi.io/api/v1/goods");

    goods = await response.json();
}

export {
    goods,
    cartItems,

    listAsync
}