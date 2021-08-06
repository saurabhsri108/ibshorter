import {NextApiRequest, NextApiResponse} from 'next';

type ChangeResponse = {
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse<ChangeResponse>) => {
  if (req.method !== 'POST') {
    res.status(404).json({
      message: 'Bad Request',
    });
  }

  if (req.method === 'POST') {
    res.status(200).json({
      message: 'Password Changed',
    });
  }
};