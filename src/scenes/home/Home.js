import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AsyncStorage, StyleSheet, Text, View, Image, ImageBackground, Dimensions, Modal, FlatList } from 'react-native'
import Button from '../../components/Button'
import { colors, images } from '../../styles'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Carousel from 'react-native-snap-carousel';
import { getCategory, getLocation, getBanner } from "../../modules/service"
import { fileBaseUrl } from "../../modules/constant"
import Loader from "../../components/Loader"
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center",
    overflow: "scroll",
    paddingBottom: 5,
    paddingTop: 5
  },
  singleCategory: {
    borderWidth: 1,
    marginTop: 8,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 0,
    borderColor: colors.yellow,
    backgroundColor: "#fff"
  },
  categoryImage: {
    width: screenWidth / 3 - 10,
    height: 100
  },
  title: {
    height: 25,
  },
  bannerImage: {
    height: 180,
  },
  bannerTitle: {
    backgroundColor: "#ed7d316e",
    color: "#fff",
    textAlign: "left",
    marginTop: 140,
    paddingLeft: 10,
    fontSize: 30
  },
  headingSection: {
    flexDirection: 'row',
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 2,
    paddingRight: 10
  },
  catTitle: {
    fontSize: 18
  },
  catLink: {
    color: colors.yellow,
  },
  offerButton: {
    marginLeft: 8,
    marginRight: 8
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#ed7d3185",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5
  },
  modalHeading: {
    fontSize: 25,
    width: screenWidth - 110
  },
  list: {
    marginTop: 30,
  },
  singleMenu: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 5,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: screenWidth - 30
  },
  locationText: {
    fontSize: 20,
    textAlign: "left"
  },
  loader: {
    width: screenWidth - 1
  }

})

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      showLocation: false,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
          image: images.frut
        },
        {
          title: "Item 2",
          text: "Text 2",
          image: images.grapes
        },
        {
          title: "Item 3",
          text: "Text 3",
          image: images.grapes
        },
        {
          title: "Item 4",
          text: "Text 4",
          image: images.frut
        },
        {
          title: "Item 1",
          text: "Text 1",
          image: images.frut
        },
        {
          title: "Item 2",
          text: "Text 2",
          image: images.grapes
        },

      ],
      categories: [],
      isLoading: true,
      location: [],
      currentLocation: null,
      banners: []
    }
  }
  async componentDidMount() {
    this._setLocation()
    const getCategoryRes = await getCategory()
    const getBannersRes = await getBanner()
    if (getCategoryRes) {
      this.setState({
        categories: getCategoryRes.all_category,
      })
    }
    if (getBannersRes) {
      let bannerImages = getBannersRes.gallery;
      bannerImages = bannerImages.filter((itm) => {
        return itm.type === 'Banner'
      })
      this.setState({
        banners: bannerImages,
      })
    }
  }
  _renderItem({ item, index }) {
    return (
      <View style={{
        borderRadius: 5,
        padding: 8
      }}>

        <ImageBackground source={{ uri: fileBaseUrl + item.image }} style={styles.bannerImage}>
        </ImageBackground>

      </View>

    )
  }
  async _setLocation() {
    const getLocationRes = await getLocation()
    if (getLocationRes) {
      this.setState({
        isLoading: false,
        location: getLocationRes.all_location,
      })
    }
    setTimeout(function () {
      this.setState({ showLocation: true });
    }.bind(this), 2000);
  }
  _savedLocationData = async (savedLocation) => {
    this.setState({ showLocation: false })
  }

  _getUrl(url) {
    return fileBaseUrl + url
  }
  render() {

    const { navigation } = this.props
    const { showLocation, categories, location, isLoading } = this.state
    return (
      isLoading ?
        <Loader />
        :
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
              layout={'default'} layoutCardOffset={`9`}
              ref={ref => this.carousel = ref}
              data={this.state.banners}
              sliderWidth={screenWidth}
              autoplay={true}
              itemWidth={screenWidth}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({ activeIndex: index })} />

          </View>
          <View style={styles.headingSection}>
            <View style={styles.headingLeft}>
              <Text style={styles.catTitle}> Popular categories</Text>
            </View>
            <View style={styles.headingLink}>
              <Text style={styles.catLink} onPress={() => {
                navigation.navigate('CategoryDetails', { from: 'Home' })
              }}>Browse All {" "}
                <FontIcon
                  name="arrow-right"

                /></Text>
            </View>

          </View>
          <View style={styles.categoryWrapper}>

            {
              categories && categories.length > 0 && categories.slice(0, 6).map((itm, index) =>

                <View style={styles.singleCategory} onStartShouldSetResponder={() => {
                  navigation.navigate('Category', { from: 'Profile', categoryId: itm.id,categoryTitle: itm.title })
                }}>
                  <Image
                    source={{ uri: this._getUrl(itm.image) }}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.title} >{itm.title}</Text>
                </View>

              )
            }
          </View>
          <View style={styles.offerButton}>
            <Button title="VIEW ALL CATEGORIES"
              color="white"
              onPress={() => {
                navigation.navigate('CategoryDetails', { from: 'Home' })
              }}
              backgroundColor={colors.yellow}
            >
            </Button>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showLocation}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalHeading}>Please Select Location</Text>
                <FlatList
                  style={styles.list}
                  data={location}
                  renderItem={({ item }) =>
                    <View style={styles.singleMenu} onStartShouldSetResponder={() => {
                      this._savedLocationData(item)

                    }}>
                      <Text style={styles.locationText}>{item.locTitle}</Text>
                    </View>
                  }
                />
              </View>
            </View>
          </Modal>
        </View>


    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
}

Home.defaultProps = {
  navigation: {},
}

export default Home
