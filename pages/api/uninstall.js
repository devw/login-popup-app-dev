import { shopify } from "./shopify";
const { scriptTag } = shopify;
const { scriptTagSrc } = process.env;

const removeScripTagFromShop = async () => {
    const scripts = await scriptTag.list({ src: scriptTagSrc });
    const ids = scripts.map((e) => e.id);
    ids.map((id) => scriptTag.delete(id));
    console.log(`Removed the following script: ${ids}`);
};

const removeShopFromDDB = async (req, res) => {
    const { SHOP, AWS } = process.env;

    const result = await fetch(`${AWS}/ddb/${SHOP}`, {
        method: "DELETE",
    });
    res.status(res.statusCode).json({});
};

export default async (req, res) => {
    removeShopFromDDB(req, res);
    removeScripTagFromShop();
};
