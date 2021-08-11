import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainLayout} from '../../screens/MainLayout';
import {COLORS} from '../../constants';
import {useState} from 'react';
import Animated from 'react-native-reanimated';
import {CustomDrawerContent} from '../../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export const CustomDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
