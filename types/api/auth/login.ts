export type LoginReq = {
  email: string;
  password: string;
};

export type LoginRes = {
  token: string;
  fullName: string;
};

export type ErrorRes = {
  message: string;
};
