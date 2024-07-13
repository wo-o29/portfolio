import { openGraphParser } from "@/src/utils/openGraphParser";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;
  try {
    const openGraphData = await openGraphParser(url as string);
    res.status(200).json(openGraphData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
