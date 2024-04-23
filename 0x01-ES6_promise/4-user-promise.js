export default function signUpUser(firstName, lastName) {
  const userData = {
    firstName,
    lastName,
  };
  return Promise.resolve(userData);
}
