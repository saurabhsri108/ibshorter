import { NextApiRequest, NextApiResponse } from "next";

type ForgotResponse = {
  message: string;
};

const forgot = (req: NextApiRequest, res: NextApiResponse<ForgotResponse>) => {
  if (req.method !== "POST") {
    res.status(404).json({
      message: "Bad Request",
    });
  }

  res.status(200).json({
    message: "We have sent a password reset link to your email",
  });
};

export default forgot;
