import { login } from "../actions";

export async function POST(request: Request) {
  const user = await request.json();

  const isLoggedIn = login(user);

  return Response.json({
    isLoggedIn
  });
}