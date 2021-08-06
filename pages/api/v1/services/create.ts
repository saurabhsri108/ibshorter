import { NextApiRequest, NextApiResponse } from "next";

type ServiceResponse = {
  message: string;
};

const createUrl = (
  req: NextApiRequest,
  res: NextApiResponse<ServiceResponse>
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

export default createUrl;
