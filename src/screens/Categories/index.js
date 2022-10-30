import {CustomText, ProductList, colors, gs} from '~/components';
import {FilterSvg, SortSvg} from '~/assets';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {productsSelector} from '~/modules/product/selector';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Categories = props => {
  const insets = useSafeAreaInsets();
  const products = useSelector(productsSelector);
  const {Container, HeaderContainer, CommonButton, CommonText, FreeView} =
    styles;
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <View style={HeaderContainer}>
        <TouchableOpacity style={CommonButton}>
          <SortSvg width={22} height={22} />
          <CustomText style={CommonText} fSemibold f14 children="SIRALA" />
        </TouchableOpacity>
        <View style={FreeView} />
        <TouchableOpacity style={CommonButton}>
          <FilterSvg width={22} height={22} />
          <CustomText style={CommonText} fSemibold f14 children="FİLTRELE" />
        </TouchableOpacity>
      </View>
      <ProductList
        flatStyle={{backgroundColor: colors.color7}}
        data={products}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: colors.color7},
  HeaderContainer: {
    ...gs.fdr,
    paddingHorizontal: 20,
    backgroundColor: colors.color7,
    ...gs.shadow1,
    paddingVertical: 20,
    marginBottom: 20,
  },
  CommonButton: {...gs.fdr, flex: 1, ...gs.jcc},
  CommonText: {paddingLeft: 15},
  FreeView: {
    borderLeftWidth: 1,
    height: '100%',
    borderColor: colors.color13,
  },
});

export {Categories};
// exports Example Screen
// export * from './Example';
