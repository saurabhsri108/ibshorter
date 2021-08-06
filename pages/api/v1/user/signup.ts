import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../../api/utils/supabase-client";

type User = Object;

type ISignResponse = {
  user?: User | null;
  error?: string;
  message?: string;
};

interface ISignRequest {
  username: string;
  email: string;
  password: string;
}

const signUp = async (
  req: NextApiRequest,
  res: NextApiResponse<ISignResponse>
) => {
  if (req.method !== "POST") {
    res.status(404).json({
      message: "Bad Request",
    });
  }

  const { username, email, password }: ISignRequest = req.body;
  console.log(username, email, password);

  const { user, error } = await supabase.auth.signUp({ email, password });

  const profileData = await supabase
    .from("profile")
    .insert([{ id: user?.id, username }]);
  console.log(profileData);

  if (error) return res.status(401).json({ error: error.message });

  res.status(201).json({
    user: user,
    message:
      "Thanks for signing up! A verification link has been sent to your email",
  });
};

export default signUp;
