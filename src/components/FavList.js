import {FlatList, View} from 'react-native';
import React, {useCallback} from 'react';

import {FavCard} from './FavCard';

const FavList = ({data, listHeader, flatStyle, ...rest}) => {
  const renderItem = useCallback(
    ({item, index}) => <FavCard item={item} index={index} />,
    [],
  );
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  return (
    <FlatList
      style={[flatStyle]}
      data={data}
      renderItem={renderItem}
      ListFooterComponent={() => <View />}
      ListFooterComponentStyle={{height: 50}}
      keyExtractor={keyExtractor}
    />
  );
};
export {FavList};
