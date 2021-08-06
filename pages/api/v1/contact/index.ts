import { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = {
  message: string;
};

const contact = (
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
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

export default contact;
