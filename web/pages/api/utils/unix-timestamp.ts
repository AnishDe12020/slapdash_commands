// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import unixTimestampResponse from "../../../../src/shared/utils/unix-timestamp";

const handler = (_, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(unixTimestampResponse);
};

export default handler;
