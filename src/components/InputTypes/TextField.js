import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
//import {veriantColor} from "../../../Services/veriant"
const TextField = (props) => {
  const {label,errorMessage,...rest}=props
  return (
        <View style={styles.formField}>
        <Text style={styles.label}>{label}</Text>
            <TextInput
               style={styles.textField}
               {...rest}
        />
        {errorMessage && <Text style={styles.error} >{errorMessage}</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
    
    textField:{
      height: 40,
      borderStyle:"solid",
      borderWidth:1,
      padding:10
    },
    error:{
        color:"red"
    },
    label:{
      marginBottom:5
    }

  });
  export default TextField