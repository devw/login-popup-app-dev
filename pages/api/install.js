export default async (req, res) => {
    const { accessToken, SHOP, AWS } = process.env;
    const endpoint = `${AWS}/ddb/${SHOP}`;
    const body = {
        ...JSON.parse(req.body),
        accessToken: accessToken,
        subscription: "monthly",
    };

    const result = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(body),
    });
    res.status(res.statusCode).json(await result.json());
};
