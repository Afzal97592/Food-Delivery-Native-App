import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { hr80, colors } from '../../global/style'
 

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodie</Text>
      <View style={styles.logo}>
        <Image source={require("../../../assets/images/logo.png")} style={styles.logoImg} />
      </View>
      <View style={hr80} />
      <Text style={styles.text}>Find the best food around you at lowest price</Text>
      <View style={hr80} />
      <View style={styles.btnout}>
        <TouchableOpacity
         onPress={()=>navigation.navigate('signup')}
        >
            <Text style={styles.btnTxt}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>navigation.navigate('Login')}
        >
            <Text style={styles.btnTxt}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff4242',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
      fontSize:50,
      color:colors.col1,
      textAlign:'center',
      marginVertical:10,
      fontWeight:'200'
    },
    logo:{
      width:'85%',
      height:'38%',
      alignItems:'center',
      // backgroundColor:'white'
    },
    logoImg:{
      width:'100%',
      height:"100%"
    },
    text:{
      fontSize:18,
      width:'80%',
      color:colors.col1,
      textAlign:'center'
    },
    btnout:{
      flexDirection:'row'
    },
    btnTxt:{
      fontSize:20,
      color:colors.text1,
      textAlign:'center',
      marginVertical:30,
      marginHorizontal:10,
      fontWeight:'700',
      backgroundColor:'#fff',
      borderRadius:10,
      padding:10,
      paddingHorizontal: 20
    }
})