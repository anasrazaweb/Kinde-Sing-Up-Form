import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth("http://localhost:3000/api/auth/kinde_callback");