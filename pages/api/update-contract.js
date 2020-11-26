export default async (req, res) => {
    const { SHOP, AWS } = process.env;
    const body = {
        ...JSON.parse(req.body),
        paramName: "subscription",
        paramValue: "yearly",
    };

    const result = await fetch(`${AWS}/ddb/${SHOP}`, {
        method: "PUT",
        body: JSON.stringify(body),
    });
    res.status(res.statusCode).json(await result.json());
};
