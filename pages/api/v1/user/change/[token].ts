import { NextApiRequest, NextApiResponse } from "next";

type ChangeResponse = {
  message: string;
  token: string | string[];
};

const token = (req: NextApiRequest, res: NextApiResponse<ChangeResponse>) => {
  if (req.method !== "GET") {
    res.status(404).json({
      message: "Bad Request",
      token: "Not Available",
    });
  }

  const { token } = req.query;
  res.status(200).json({
    message: "GET Password Changed",
    token: token,
  });
};

export default token;
