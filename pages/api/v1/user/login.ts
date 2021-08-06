import { NextApiRequest, NextApiResponse } from "next";

type LoginResponse = {
  message: string;
};

const login = (req: NextApiRequest, res: NextApiResponse<LoginResponse>) => {
  if (req.method !== "POST") {
    res.status(404).json({
      message: "Bad Request",
    });
  }

  res.status(200).json({
    message: "Welcome back!",
  });
};

export default login;
