
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "http://localhost/proyectos/backend/",
  consumerKey:"ck_c4adf31e63babd17b29520ffbb8878a7c1c0884f",
  consumerSecret:"cs_b7f89d8e956da6ab83af8aa21e4faa114b66ffc7",
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  const response = await api.get("products")
    return response 
}
export async function fetchWooCommerceProduct(id) {
    const response = await api.get("products/"+id);
    return response;
}