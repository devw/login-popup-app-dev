import Shopify from "shopify-api-node";

const { SHOP, accessToken } = process.env;

export const shopify = new Shopify({
    shopName: SHOP,
    accessToken: accessToken,
});
