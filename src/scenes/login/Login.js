import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, Text, View, Image ,ImageBackground} from 'react-native'
import Button from '../../components/Button'
import { colors, images } from '../../styles'
import TextField from "../../components/InputTypes"
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 40,
    justifyContent:'center',
  },
  imageView:{
    alignItems: 'center',
    justifyContent:'center',
  },
  image:{
     flexGrow:1,
     height:200,
     width:200
  },
  heading:{
      textAlign: 'center',
      fontSize:25
  },
  formField:{
   flexGrow:1,
   padding:20,
   marginTop:50,
  },
  textField:{
    height: 40,
    borderStyle:"solid",
    borderBottomWidth:1
  },
  button:{
      marginTop:20
  },
  bottomCityImage:{
    position:"absolute",
    bottom:0,
    left:12
    
  }

});

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex:1
     
  }
}


  render() {
    const { loginTrue } = this.props
    return (
      <View style={styles.container}>
        
      <View style={styles.imageView}>
         <Image style={styles.image} source={images.logo} />
      </View>
      <View style={styles.heading}>
         <Text style={styles.heading}>Nirvana Agro Foods</Text>
      </View>
      <View style={styles.formField}>
         <TextField  
             label='Mobile Number ' 
             placeholder="Enter Your Mobile Number"
             keyboardType='numeric'
             errorMessage={false}
             maxLength={10}/>
         <View style={styles.button}>
            <Button
              onPress={()=>{loginTrue(true)}}
              title="CONTINUE"
              color={colors.white}
              backgroundColor={colors.yellow}
              />
          </View>
      </View>
      <View style={styles.bottomCityImage}>
         <Image  source={images.back} />
      </View>
      
     
  </View>
         
    )
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
}

Login.defaultProps = {
  navigation: {},
}

export default Login
