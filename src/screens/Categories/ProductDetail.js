import {CustomButton, CustomText, colors, gs, sizes} from '~/components';
import {FilterSvg, SortSvg} from '~/assets';
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {productsSelector} from '~/modules/product/selector';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const ProductDetail = props => {
  const insets = useSafeAreaInsets();
  const products = useSelector(productsSelector);
  const [filterModal, setfilterModal] = useState(false);
  const {Container, HeaderContainer, CommonButton, CommonText, FreeView} =
    styles;
  let data = [
    {id: 1, name: 'Cinsiyet'},
    {id: 2, name: 'Ürün Çeşidi'},
    {id: 3, name: 'Marka'},
    {id: 4, name: 'Renk', isPressable: true},
    {id: 5, name: 'Beden'},
  ];
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <Modal
        visible={filterModal}
        swipeDirection="left"
        presentationStyle="pageSheet"
        transparent={false}
        style={{
          flex: 0,
        }}>
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
          <CustomText style={{...gs.asc}} f16 fSemibold children="Filtrele" />
        </View>
        <ScrollView>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  ...gs.fdr,
                  paddingVertical: 15,
                  marginHorizontal: 20,
                  ...gs.jcsb,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.color15,
                  ...gs.aic,
                }}>
                <CustomText f14 children={item.name} />
                <MaterialCommunityIcons
                  name={'chevron-right'}
                  color={colors.color9}
                  size={sizes.f26}
                />
              </View>
            );
          })}
        </ScrollView>
        <CustomButton
          children="Ürünleri Gör"
          style={{marginBottom: insets.bottom + 20}}
        />
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

export {ProductDetail};
// exports Example Screen
// export * from './Example';
