import HomeTabs from './HomeTabs';
import {ProductDetail} from '~screens';
import React from 'react';
import {commonStack} from '~config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function CommonStack() {
  return (
    <Stack.Navigator
      initialRouteName={commonStack.productDetail}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={commonStack.homeTabs}
        component={HomeTabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={commonStack.productDetail}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

export default CommonStack;
