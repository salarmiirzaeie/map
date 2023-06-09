import Login from '../../screens/auth/Login';
export type Route = {
  name: string;
  component: React.ComponentType<any>;
  options?: object;
};
export const authRoutes: Route[] = [
  {
    name: 'Login',
    component: Login,
  },
];
