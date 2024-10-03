import { signup } from "../actions";

export async function POST(request: Request) {
  const user = await request.json();

  signup(user);

  return Response.json(user);
}