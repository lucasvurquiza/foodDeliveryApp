import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from '../../constants';
import {CustomDrawerItem} from '../../components/CustomDrawerItem';

export const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/* Close Button */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 25,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Informations */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('Profile')}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              {dummyData.myProfile?.name}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
