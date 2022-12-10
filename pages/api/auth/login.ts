// ** Type Imports
import type { NextApiRequest, NextApiResponse } from 'next';
import type {
  ErrorRes,
  LoginReq,
  LoginRes,
} from '../../../types/api/auth/login';

const dummyUserData = {
  email: 'admin@info.com',
  password: 'admin',
  fullName: 'Admin Doe',
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginRes | ErrorRes>
) {
  const data: LoginReq = req.body as LoginReq;

  if (
    data.email === dummyUserData.email &&
    data.password === dummyUserData.password
  ) {
    const token = (Math.random() + 1).toString(36).substring(7);
    const fullName = dummyUserData.fullName;

    return res.status(200).json({ token, fullName });
  }

  return res.status(403).json({ message: 'Email or password wrong.' });
}
