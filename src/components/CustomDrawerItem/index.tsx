import React from 'react';
import {Text, Image, TouchableOpacity, ImageSourcePropType} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

type CustomDrawerItemProps = {
  label: string;
  icon: ImageSourcePropType;
};

export const CustomDrawerItem = ({label, icon}: CustomDrawerItemProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
      }}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
