import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {basketItemsSelector} from '~/modules/basket/selector';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Basket = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  const basketItems = useSelector(basketItemsSelector);
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <Text>Basket</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
});

export {Basket};
// exports Example Screen
// export * from './Example';
