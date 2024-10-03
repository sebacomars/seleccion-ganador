import { users } from "./data";

export function login(user: any) {
  for (const userOnData of users) {
    if (userOnData.username === user.username && userOnData.password === user.password) {
      return true;
    }
  }

  return false;
}

export function signup(user: any) {
  users.push(user);
}