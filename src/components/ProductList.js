import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {colors, gs} from './config';

import {MedProductCard} from './MedProductCard';
import {calcWidth} from '~utils';

const ProductList = ({data, listHeader, flatStyle, ...rest}) => {
  const {ItemSeparator, List} = styles;
  const FlatListItemSeparator = useCallback(
    () => <View style={ItemSeparator} />,
    [],
  );
  const renderItem = useCallback(
    ({item}) => <MedProductCard item={item} />,
    [],
  );
  const keyExtractor = useCallback(item => item.ListingId.toString(), []);
  return (
    <FlatList
      numColumns={2}
      style={[List, flatStyle]}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={listHeader ? listHeader : FlatListItemSeparator}
      ListFooterComponent={data && data.length > 0 && FlatListItemSeparator}
      ListFooterComponentStyle={{height: 50}}
      keyExtractor={keyExtractor}
      columnWrapperStyle={{
        width: calcWidth(100),
        paddingHorizontal: 20,
        ...gs.jcsb,
      }}
      ItemSeparatorComponent={FlatListItemSeparator}
      showsHorizontalScrollIndicator={false}
      {...rest}
    />
  );
};
const styles = StyleSheet.create({
  List: {
    width: calcWidth(100),
    ...gs.asc,
    // paddingVertical: 20,
  },
  ItemSeparator: {
    width: calcWidth(100) - 40,
    ...gs.asc,
    height: 20,
  },
});
export {ProductList};
