import { NextApiRequest, NextApiResponse } from "next";

type PlatformResponse = {
  message: string;
};

const platform = (
  req: NextApiRequest,
  res: NextApiResponse<PlatformResponse>
) => {
  if (req.method !== "POST") {
    res.status(404).json({
      message: "Bad Request",
    });
  }

  res.status(200).json({
    message: "Successful Login",
  });
};

export default platform;
