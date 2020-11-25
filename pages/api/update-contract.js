export default async (req, res) => {
    const { SHOP, AWS } = process.env;
    const endpoint = `${AWS}/ddb/${SHOP}`;
    const body = {
        ...JSON.parse(req.body),
        paramName: "subscription",
        paramValue: "yearly",
    };

    const result = await fetch(endpoint, {
        method: "PUT",
        body: JSON.stringify(body),
    });
    res.status(res.statusCode).json(await result.json());
};
