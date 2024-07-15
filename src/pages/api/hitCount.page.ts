import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ svgText: string }>,
) {
  try {
    const response = await fetch(
      "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwoohyeok.vercel.app",
    );
    const svgText = await response.text();
    res.status(200).json({ svgText });
  } catch (error) {
    console.error("Error fetching hit count data:", error);
    res.status(500).json({ svgText: "error" });
  }
}
