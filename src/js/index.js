import { listAsync, goods, cartData } from "./data.js";
import { renderLoadMessage, renderCards, renderCart, renderDiscountSlides} from "./dom.js";
import { regViewClose, regCartDialogHandlers, regSearchHandler } from "./handlers.js";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

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

        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            // Optional parameters
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'disabled_swiper_button'
            },
          });
    }
    catch (e) {
        console.error(e);
    }
})()