import { getData } from "./local-storage-data.js";
import { cartName, urlGetGoods } from "./_variables.js";

let goods = [];

const cartData = getData(cartName);

const listAsync = async () => {
    const response = await fetch(urlGetGoods);

    goods = await response.json();
}

export {
    goods,
    cartData,

    listAsync
}