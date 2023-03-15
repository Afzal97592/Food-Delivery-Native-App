import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { btn1, colors, hr80, titles } from '../../global/style'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


const LoginScreen = ({navigation}) => {
    const[emailFocus, setEmailFocus] = useState(false);
    const[PasswordFocus, setPasswordFocus] = useState(false);
    const[showPassword, setShowPassword] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>
      <View style={styles.inputOut}>
       <AntDesign name="user" size={24} color={emailFocus===true? colors.text1 : colors.text2} />
        <TextInput placeholder='Email' style={styles.input}
         onFocus={()=>{
            setEmailFocus(true)
            setPasswordFocus(false)
            setShowPassword(false)
         }}
        />
      </View>
      <View style={styles.inputOut}>
       <MaterialIcons name="lock-clock" size={24} color={PasswordFocus === true? colors.text1: colors.text2} />
        <TextInput placeholder='Password' style={styles.input} 
          onFocus={()=>{
            setEmailFocus(false)
            setPasswordFocus(true)
         }}

         secureTextEntry={showPassword=== false? true : false}
        />
        <Ionicons  size={24} color="black" name={!showPassword ?"ios-eye-off" : "ios-eye"}
         onPress={()=>{
            setShowPassword(!showPassword)
         }}
        />
      </View>
      <TouchableOpacity style={btn1} onPress={()=>navigation.navigate('Home')} >
        <Text style={{color:colors.col1, fontSize:titles.btnTxt, fontWeight:'bold'}}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forget Password?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With</Text>

      <View style={styles.gf}>
      <TouchableOpacity>
        <View style={styles.gfIcons}>
        <FontAwesome name="google" size={30} color="red" />
        </View>
      </TouchableOpacity> 
      <TouchableOpacity>
        <View style={styles.gfIcons}>
        <FontAwesome name="facebook-f" size={30} color="darkblue" />
        </View>
      </TouchableOpacity> 
      </View>
      <View style={hr80} />
       <Text>Don't have an account?
       <Text  style={styles.signup} onPress={()=>navigation.navigate('signup')} >  Sign Up</Text>
       </Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    head1:{
        fontSize:titles.title1,
        color:colors.text1,
        textAlign:'center',
        marginVertical:10,
    },
    inputOut:{
        flexDirection:'row',
        width:'80%',
        marginVertical:10,
        backgroundColor:colors.col1,
        paddingHorizontal:10,
        paddingVertical:10,
        alignSelf:'center',
        elevation:10,
    },
    input:{
        fontSize:18,
        marginLeft:10,
        width:'80%'
    },
    forgot:{
        color:colors.text2,
        marginTop:20,
        marginBottom:10,
    },
    or:{
        color:colors.text1,
        marginVertical:10,
       fontWeight:'bold'
    },
    gftxt:{
        color:colors.text2,
        marginVertical:10,
        fontSize:25
    },
    gf :{
        flexDirection:'row',
    },
    gfIcons:{
        backgroundColor:'white',
        width:50,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems:'center',
        elevation:20,
    },
    signup:{
        color:colors.text1,
        fontWeight:'bold',
        fontSize:16
    }
})