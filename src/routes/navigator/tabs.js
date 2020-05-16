import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../styles'

// stack navigators
import { homeNavigator, profileNavigator ,categoryNavigator} from './stacks'

const tabNavigator = createBottomTabNavigator({
    HomeTab: {
      screen: homeNavigator,
      navigationOptions: { title: 'Home' },
    },
    
    // CategoryTab: {
    //   screen: categoryNavigator,
    //   navigationOptions: { title: 'All Product' },
    // },
     ProfileTab: {
      screen: profileNavigator,
      navigationOptions: { title: 'Cart' },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'HomeTab':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.yellow : colors.gray}
                size={20}
                solid
              />
            )
          case 'ProfileTab':
            return (
              <FontIcon
                name="cart-plus"
                color={focused ? colors.yellow : colors.gray}
                size={20}
                solid
              />
            )
          case 'CategoryTab':
            return (
              <FontIcon
                name="bars"
                color={focused ? colors.yellow : colors.gray}
                size={20}
                solid
              />
            )
            
          default:
            return <View />
        }
      },
      initialRouteName: 'Cart',
      tabBarOptions: {
        activeTintColor: colors.yellow,
        inactiveTintColor: colors.gray,
        style: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
        },
      },
      swipeEnabled: true,
    }),
  }
)

export default tabNavigator
