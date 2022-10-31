import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {
  favoriteIdListSelector,
  favoriteListSelector,
} from '~/modules/product/selector';

const Favorites = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  const favIdList = useSelector(favoriteIdListSelector);
  const favList = useSelector(favoriteListSelector);
  console.log('favIdList + ' + JSON.stringify(favIdList));
  console.log('favList + ' + JSON.stringify(favList));
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <Text>Favorites</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
});

export {Favorites};
// exports Example Screen
// export * from './Example';
