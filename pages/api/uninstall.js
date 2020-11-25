export default async (req, res) => {
    // removes the entry from dinamo db

    const { SHOP, AWS } = process.env;
    const endpoint = `${AWS}/ddb/${SHOP}`;

    const result = await fetch(endpoint, {
        method: "DELETE",
    });
    res.status(res.statusCode).json({});
};
