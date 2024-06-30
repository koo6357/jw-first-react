import { httpClient } from "@/api/httpClient.ts";
import { IUser } from "@/models/users.ts";

export const fetchUsers = async () => {
  try {
    const { data } = await httpClient<IUser[]>({
      method: "GET",
      url: "/users",
    });
    return data;
  } catch (e) {
    // todo: 에러 처리 필요
    console.log("@@ e", e);
    return null;
  }
};
