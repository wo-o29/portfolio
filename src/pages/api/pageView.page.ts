import type { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ pageView: string }>,
) {
  try {
    const credentials = JSON.parse(
      Buffer.from(
        process.env.NEXT_PUBLIC_GA_CREDENTIALS_BASE64!,
        "base64",
      ).toString("utf-8"),
    );

    const analyticsDataClient = new BetaAnalyticsDataClient({
      projectId: credentials.project_id,
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      },
    });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.NEXT_PUBLIC_GA_VIEW_ID}`,
      dateRanges: [
        {
          startDate: "2024-01-01",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "eventName", // 이벤트 이름
        },
      ],
      dimensionFilter: {
        // 이벤트 이름 중 page_view인 것만 필터링
        filter: {
          fieldName: "eventName",
          stringFilter: {
            matchType: "EXACT",
            value: "page_view",
            caseSensitive: false,
          },
        },
      },
      metrics: [
        {
          name: "eventCount",
        },
      ],
    });

    res
      .status(200)
      .json({ pageView: response.rows![0].metricValues![0].value! });
  } catch (error) {
    console.error("Error fetching Google Analytics data:", error);
    res.status(500).json({ pageView: "error" });
  }
}
