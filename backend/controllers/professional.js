import { getDb } from "../db/connect.js";

const getData = async (req, res, next) => {
  const result = await getDb().db().collection("user").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(lists[0]);
  });
};

export { getData };
