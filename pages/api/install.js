import { shopify } from "./shopify";
const { scriptTag } = shopify;
const { scriptTagSrc, scriptTagConfig, accessToken, SHOP, AWS } = process.env;

const clean = async () => {
    const scripts = await scriptTag.list({ src: scriptTagSrc });
    const ids = scripts.map((e) => e.id);
    ids.map((id) => scriptTag.delete(id));
    return `Removed the following scripts: ${ids}.`;
};

const writeConfigOnS3 = async () => {
    const getConfig = async () => {
        const promise = await fetch(scriptTagConfig);
        return await promise.json();
    };

    const config = await getConfig();

    const promise = await fetch(`${AWS}/s3/${SHOP}`, {
        method: "POST",
        body: JSON.stringify(config),
    });
    console.log(`Writing file on S3: ${JSON.stringify(await promise.json())}`);
};

const addScriptTagToShop = async () => {
    await clean();
    const param = { event: "onload", src: scriptTagSrc };
    const response = await scriptTag.create(param);
    console.log(`Created the following script: ${JSON.stringify(response)}`);
};

const registerShopOnDdb = async (req, res) => {
    const body = {
        ...JSON.parse(req.body),
        accessToken: accessToken,
        subscription: "monthly",
    };

    const result = await fetch(`${AWS}/ddb/${SHOP}`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    res.status(res.statusCode).json(await result.json());
};

export default async (req, res) => {
    registerShopOnDdb(req, res);
    writeConfigOnS3();
    addScriptTagToShop();
};
