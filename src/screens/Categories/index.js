import {
  CustomButton,
  CustomText,
  ProductList,
  colors,
  gs,
  sizes,
} from '~/components';
import {FilterSvg, SortSvg} from '~/assets';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {filterDataSelector, productsSelector} from '~/modules/product/selector';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Categories = props => {
  const insets = useSafeAreaInsets();
  const Actions = useActions();
  const products = useSelector(productsSelector);
  const filterData = useSelector(filterDataSelector);
  const [filterModal, setfilterModal] = useState(false);
  const [type, setType] = useState(false);
  const [selectedObj, setSelectedObj] = useState({});
  const {
    Container,
    HeaderContainer,
    CommonButton,
    CommonText,
    FreeView,
    RenderButton,
  } = styles;
  useEffect(() => {
    Actions.getFilterAction();
  }, []);
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const renderItem = ({item, index}) => {
    return (
      (item.ItemType === 'size' ||
        item.ItemType === 'gender' ||
        item.ItemType === 'brand' ||
        item.ItemType === 'color' ||
        item.ItemType === 'Price') && (
        <TouchableOpacity
          onPress={() => {
            setSelectedObj(item);
            setType(true);
          }}
          key={index}
          style={RenderButton}>
          <CustomText f14 children={item.Name} />
          <MaterialCommunityIcons
            name={'chevron-right'}
            color={colors.color9}
            size={sizes.f26}
          />
        </TouchableOpacity>
      )
    );
  };
  const renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedObj(item);
          setType(true);
        }}
        key={index}
        style={RenderButton}>
        <CustomText f14 children={item.Name} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <Modal
        visible={filterModal}
        presentationStyle="pageSheet"
        transparent={false}
        // onShow={}
        style={{
          flex: 0,
        }}>
        {!type ? (
          <>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                ...gs.jcc,
              }}>
              <TouchableOpacity
                onPress={() => setfilterModal(false)}
                style={{
                  ...gs.jccaic,
                  ...gs.posAbs,
                  left: 20,
                }}>
                <MaterialCommunityIcons
                  name={'close'}
                  color={colors.color2}
                  size={sizes.f22}
                />
              </TouchableOpacity>
              <CustomText
                style={{...gs.asc}}
                f16
                fSemibold
                children="Filtrele"
              />
            </View>
            <FlatList
              data={Object.keys(filterData).map((item, index) => {
                return filterData[item];
              })}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
            <CustomButton
              children="Ürünleri Gör"
              style={{marginBottom: insets.bottom + 20}}
            />
          </>
        ) : (
          <>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                ...gs.jcc,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedObj({});
                  setType(false);
                }}
                style={{
                  ...gs.jccaic,
                  ...gs.posAbs,
                  left: 20,
                }}>
                <MaterialCommunityIcons
                  name={'chevron-left'}
                  color={colors.color2}
                  size={sizes.f22}
                />
              </TouchableOpacity>
              <CustomText
                style={{...gs.asc}}
                f16
                fSemibold
                children={selectedObj.Name}
              />
            </View>
            <FlatList
              data={selectedObj.FilterModuleItems}
              renderItem={renderItem2}
              keyExtractor={keyExtractor}
            />
            <CustomButton
              textColor={colors.mainColor}
              bordered
              children="Uygula"
              style={{marginBottom: insets.bottom + 20}}
            />
          </>
        )}
      </Modal>
      <View style={HeaderContainer}>
        <TouchableOpacity style={CommonButton}>
          <SortSvg width={22} height={22} />
          <CustomText style={CommonText} fSemibold f14 children="SIRALA" />
        </TouchableOpacity>
        <View style={FreeView} />
        <TouchableOpacity
          style={CommonButton}
          onPress={() => setfilterModal(true)}>
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
  RenderButton: {
    ...gs.fdr,
    paddingVertical: 15,
    marginHorizontal: 20,
    ...gs.jcsb,
    borderBottomWidth: 1,
    borderBottomColor: colors.color15,
    ...gs.aic,
  },
});

export {Categories};
// exports ProductDetail Screen
export * from './ProductDetail';
