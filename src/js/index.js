import { listAsync, goods, cartData } from "./data.js";
import { renderLoadMessage, renderCards, renderCart, renderDiscountSlides} from "./dom.js";
import { regViewClose, regCartDialogHandlers, regSearchHandler } from "./handlers.js";

(async function(){
    try {
        renderLoadMessage("Загрузка...");

        await listAsync();

        renderCards(goods);
        renderDiscountSlides(goods);
        renderCart(cartData);

        regViewClose();
        regCartDialogHandlers();
        regSearchHandler();
    }
    catch (e) {
        console.error(e);
    }
})()