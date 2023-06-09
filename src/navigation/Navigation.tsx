import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mainRoutes} from './main/mainRoutes';
import {authRoutes} from './auth/authRoutes';

export type RootStackParamList = {
  [routeName: string]: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  const login: boolean = true;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{animation: 'slide_from_left', headerShown: false}}>
        {login
          ? mainRoutes.map(item => (
              <Stack.Screen
                key={item.name}
                name={item.name}
                component={item.component}
              />
            ))
          : authRoutes.map(item => (
              <Stack.Screen
                key={item.name}
                name={item.name}
                component={item.component}
              />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
