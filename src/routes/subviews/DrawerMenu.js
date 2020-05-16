import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, Image } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors, images } from '../../styles'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,

  },
  logo: {
    height: 100,
    width: 100,
    marginLeft: 70
  },
  logoText: {
    color: colors.yellow,
    fontSize: 20,
    textAlign: "center"
  },
  list: {
    marginTop: 50,
  },
  singleMenu: {
    flexDirection: 'row',
    textAlign: "left"
  }
}

export class DrawerMenu extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
        <View style={styles.head}>
          <FontIcon.Button
            name="times"
            size={20}
            color={colors.gray}
            backgroundColor="white"
            onPress={() => {
              navigation.dispatch(DrawerActions.closeDrawer())
            }}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.container}>
            <Image
              source={images.logo}
              style={styles.logo}
            />
            <Text style={styles.logoText}>Nirvana Agro Foods</Text>
            <FlatList
              style={styles.list}
              data={[
                { key: 'Home', icon: 'home', url: 'Home', navType: 'Home' },
                { key: 'Cart', icon: 'cart-plus', url: 'Cart', navType: 'Profile' },
                { key: 'My Orders', icon: 'list-alt', url: 'order', navType: 'Profile' },
                { key: ' Help & Support', icon: 'question', url: 'support', navType: 'Profile' }
              ]}
              renderItem={({ item }) =>
                <View style={styles.singleMenu}
                  onStartShouldSetResponder={() => {
                    navigation.navigate(item.url, { from: item.navType })
                  }}
                >
                  <FontIcon.Button
                    name={item.icon}
                    color={colors.yellow}
                    backgroundColor="transparent"
                    style={{ paddingLeft: 15 }}
                    onPress={() => {
                      navigation.navigate(item.url, { from: item.navType })
                    }}
                  />
                  <Text onStartShouldSetResponder={() => {
                    navigation.navigate(item.url, { from: item.navType })
                  }} style={styles.item}>{item.key}</Text>

                </View>


              }
            />
          </View>
          <Text
            style={{ color: colors.yellow, fontSize: 15, textAlign: "center" }}
            onPress={() => {
              navigation.navigate('Home')
            }}>Logout</Text>
        </View>
      </View>
    )
  }
}

DrawerMenu.propTypes = {}
DrawerMenu.defaultProps = {}

export default DrawerMenu
