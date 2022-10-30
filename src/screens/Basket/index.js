import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Basket = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
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
