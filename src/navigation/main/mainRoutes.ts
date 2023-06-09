import Home from '../../screens/main/Home';
import TabNavigator from './TabNavigator';
export type Route = {
  name: string;
  component: React.ComponentType<any>;
  options?: object;
};
export const mainRoutes: Route[] = [
  {
    name: 'Tab',
    component: TabNavigator,
  },
  {
    name: 'Home',
    component: Home,
  },
];
