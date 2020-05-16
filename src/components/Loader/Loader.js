import React from 'react'
import { Image,Dimensions } from 'react-native'
import {images } from '../../styles'
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = {
    loader:{
        width:screenWidth-1
      }
}

const Loader = () => {
  return (
    <Image source={images.loader} style={styles.loader}/>
  )
}



export default Loader
