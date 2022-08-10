export interface IAuth {
  isAuthenicated: boolean;
  signIn: () => void;
  logout: () => void;
}
