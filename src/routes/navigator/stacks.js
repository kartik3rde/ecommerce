import React from 'react'
import { Image,StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Home from '../../scenes/home'
import Profile from '../../scenes/profile'
import Details from '../../scenes/details'
import Checkout from "../../scenes/checkout"
import ProductList from "../../scenes/product/ProductList"
import Cart from "../../scenes/cart"
import CategoryList from "../../scenes/category"
import { colors, images } from '../../styles'
const renderDrawerButton = (navigation) => (
  <FontIcon.Button
    name="bars"
    color="white"
    backgroundColor="transparent"
    onPress={() => {
      navigation.dispatch(DrawerActions.openDrawer())
    }}
    style={{ paddingLeft: 15 }}
  />
)
const Styles = StyleSheet.create({
  menu: {
     flexDirection: 'row',
     justifyContent:"space-between",
     alignItems:"center",
     paddingLeft:2,
     paddingRight:10
   },
  leftMenu: {
    
  },
  rightMenu: {
     marginLeft:20,
     flexDirection: "row",
     justifyContent:"space-between",
     alignItems:"flex-end",
  }
}
)
const renderLogo = () => (
  <View style={Styles.menu}>
    <View style={Styles.leftMenu}>
      <Text style={{ color: colors.white }}>Nirvana Agro Foods</Text>
    </View>
    <View style={Styles.rightMenu}>
      <FontIcon.Button
        name="bell"
        color="white"
        backgroundColor="transparent"

        style={{ paddingLeft: 15 }}
      />
      <FontIcon.Button
        name="search"
        color="white"
        backgroundColor="transparent"

        style={{ paddingLeft: 15 }}
      />
       <FontIcon.Button
        name="question"
        color="white"
        backgroundColor="transparent"

        style={{ paddingLeft: 15 }}
      />
      
    </View>
  </View>
)

export const homeNavigator = createStackNavigator({
  
  Login: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.yellow },
      headerLeft: renderDrawerButton(navigation),
      headerTitle: renderLogo()
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.white },
      headerTitleStyle: { fontSize: 18 },
      headerLeft: renderDrawerButton(navigation),
      headerTitle: renderLogo()
    }),
  },
  CategoryDetails: {
    screen: CategoryList,
    navigationOptions: ({ navigation }) => ({
      title: 'Category',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.yellow },
      headerTitleStyle: { fontSize: 18 },
      headerLeft: renderDrawerButton(navigation),
      headerTitle: renderLogo()
    }),
   },
  Category: {
    screen: ProductList,
    navigationOptions: ({ navigation }) => ({
      title: 'Category',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.yellow },
      headerTitleStyle: { fontSize: 18 },
      headerLeft: renderDrawerButton(navigation),
    }),
  },
})

export const profileNavigator = createStackNavigator({
  Profile: {
    screen: Cart,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.yellow },
      headerTitleStyle: { fontSize: 18 },
      headerLeft: renderDrawerButton(navigation),
      headerTitle: renderLogo()
    }),
  },
  CategoryDetails: {
    screen: CategoryList,
    navigationOptions: ({ navigation }) => ({
      title: 'Category',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.yellow },
      headerTitleStyle: { fontSize: 18 },
      }),
  },
  Details: {
    screen: Checkout,
    navigationOptions: ({ navigation }) => ({
      title: 'Checkout',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.yellow },
      headerTitleStyle: { fontSize: 18 },
      }),
  },
  
  Category: {
    screen: ProductList,
    navigationOptions: ({ navigation ,route }) => ({
      title: 'Category',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.yellow },
      headerTitleStyle: { fontSize: 18 },
      headerLeft: renderDrawerButton(navigation,route),
    }),
  },
})
// export const categoryNavigator = createStackNavigator({
//   Category: {
//     screen: ProductList,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Category',
//       headerTintColor: 'white',
//       headerStyle: { backgroundColor: colors.yellow },
//       headerTitleStyle: { fontSize: 18 },
//       headerLeft: renderDrawerButton(navigation),
//       headerTitle: renderLogo()
//     }),
//   }
 
// })


