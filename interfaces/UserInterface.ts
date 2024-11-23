export default interface UserI {
  id: string;
  email: string;
  name: string;
  cart: {
    items: any[];
  };
  role: string;
  token: string;
  firebaseToken: string;
}