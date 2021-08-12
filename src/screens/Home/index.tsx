import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {HorizontalFoodCard} from '../../components/HorizontalFoodCard';
import {FONTS, SIZES, COLORS, icons, dummyData} from '../../constants';

const renderSearch = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
      }}>
      <Image
        source={icons.search}
        style={{
          height: 20,
          width: 20,
          tintColor: COLORS.black,
        }}
      />

      <TextInput
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
          ...FONTS.body3,
        }}
        placeholderTextColor={COLORS.gray}
        placeholder="search food..."
      />

      <TouchableOpacity>
        <Image
          source={icons.filter}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);

  const renderMenuTypes = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index === dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}>
            <Text
              style={{
                color:
                  selectedMenuType === item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId);
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  };

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      {renderSearch()}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>{renderMenuTypes()}</View>}
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log('HorizontalFoodCard')}>
              {item.name}
            </HorizontalFoodCard>
          );
        }}
      />
    </View>
  );
};
