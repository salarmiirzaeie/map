import Home from '../../screens/main/Home';
export type Route = {
  name: string;
  component: React.ComponentType<any>;
  options?: object;
};
export const mainRoutes: Route[] = [
  {
    name: 'Home',
    component: Home,
  },
];
