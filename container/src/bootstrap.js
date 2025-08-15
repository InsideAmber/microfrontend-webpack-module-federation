import {mount as productsMount} from "products/ProductsIndex";
import {mount as cartsMount} from "cart/CartShow";

console.log("Container")

productsMount(document.querySelector("#my-products"));
cartsMount(document.querySelector("#my-cart"));