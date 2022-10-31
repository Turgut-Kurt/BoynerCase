import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {colors, gs} from './config';

import {BasketCard} from './BasketCard';
import {calcWidth} from '~utils';

const BasketList = ({data, listHeader, flatStyle, ...rest}) => {
  const {List} = styles;
  const renderItem = useCallback(({item}) => <BasketCard item={item} />, []);
  const keyExtractor = useCallback(item => item.ListingId.toString(), []);
  return (
    <FlatList
      // style={[flatStyle]}
      data={data}
      renderItem={renderItem}
      // ListFooterComponentStyle={{height: 50}}
      keyExtractor={keyExtractor}
    />
  );
};
const styles = StyleSheet.create({
  List: {
    width: calcWidth(100),
    ...gs.asc,
  },
});
export {BasketList};
