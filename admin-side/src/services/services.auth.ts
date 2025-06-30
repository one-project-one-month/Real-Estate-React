import appAxios from "@/lib/appAxios";
import { LoginRequest } from "@/types/types.auth";

export const loginAsync = async (req: LoginRequest) => {
  const res = await appAxios.post("/auth/login (or somthing like that)", req);
  return res.data;
};
