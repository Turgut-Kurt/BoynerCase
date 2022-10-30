import {Basket, Categories, Favorites, Home, Profile} from '~screens';
import {
  BasketActSvg,
  BasketSvg,
  CategoriesActSvg,
  CategoriesSvg,
  FavoritesActSvg,
  FavoritesSvg,
  HomeActSvg,
  HomeSvg,
  ProfileActSvg,
  ProfileSvg,
} from '~/assets';

import MyTabs from './MyTabs';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {homeTabs} from '~config';

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeTabs.home}
      screenOptions={{
        tabBarStyle: {borderWidth: 1},
        gestureEnabled: false,
        headerShown: false,
      }}
      keyboardHidesNavigationBar={false}
      tabBar={props => <MyTabs {...props} />}>
      <Tab.Screen
        name={homeTabs.home}
        component={Home}
        options={{
          tabBarLabel: 'Anasayfa',
          svg1: HomeActSvg,
          svg2: HomeSvg,
        }}
      />
      <Tab.Screen
        name={homeTabs.categories}
        component={Categories}
        options={{
          tabBarLabel: 'Kategoriler',
          svg1: CategoriesActSvg,
          svg2: CategoriesSvg,
        }}
      />
      <Tab.Screen
        name={homeTabs.basket}
        component={Basket}
        options={{
          tabBarLabel: 'Sepetim',
          svg1: BasketActSvg,
          svg2: BasketSvg,
        }}
      />
      <Tab.Screen
        name={homeTabs.favorites}
        component={Favorites}
        options={{
          tabBarLabel: 'Favorilerim',
          svg1: FavoritesActSvg,
          svg2: FavoritesSvg,
        }}
      />
      <Tab.Screen
        name={homeTabs.profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profilim',
          svg1: ProfileActSvg,
          svg2: ProfileSvg,
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeTabs;
