import {ProductList, colors} from '~/components';
import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {productsSelector} from '~/modules/product/selector';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Categories = props => {
  const insets = useSafeAreaInsets();
  const products = useSelector(productsSelector);
  const {Container} = styles;
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <ProductList
        flatStyle={{backgroundColor: colors.color7}}
        data={products}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
});

export {Categories};
// exports Example Screen
// export * from './Example';
