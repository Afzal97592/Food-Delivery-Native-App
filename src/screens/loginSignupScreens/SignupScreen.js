import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { btn1, colors, hr80, titles } from '../../global/style'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const SignupScreen = ({navigation}) => {
    const[fullName, setFullName] = useState(false)
    const[emailFocus, setEmailFocus] = useState(false);
    const[phoneFocus, setPhoneFocus] = useState(false)
    const[PasswordFocus, setPasswordFocus] = useState(false);
    const[showPassword, setShowPassword] = useState(false)
    const[CPasswordFocus, setCPasswordFocus] = useState(false);
    const[cshowPassword, setCshowPassword] = useState(false)
  return (
   <ScrollView showsVerticalScrollIndicator={false} > 
    <View style={styles.container}>
      <Text style={styles.head1}>Sign UP</Text>

      <View style={styles.inputOut}>
       <AntDesign name="user" size={24} color={fullName===true? colors.text1 : colors.text2} />
        <TextInput placeholder='Full Name' style={styles.input}
         onFocus={()=>{
            setFullName(true)
            setEmailFocus(false)
            setPhoneFocus(false)
            setPasswordFocus(false)
            setShowPassword(false)
            setCPasswordFocus(false)
         }}
        />
      </View>

      <View style={styles.inputOut}>
       <MaterialIcons name="email" size={24} color={emailFocus===true? colors.text1 : colors.text2} />
        <TextInput placeholder='Email' style={styles.input}
         onFocus={()=>{
            setFullName(false)
            setEmailFocus(true)
            setPhoneFocus(false)
            setPasswordFocus(false)
            setShowPassword(false)
            setCPasswordFocus(false)
         }}
        />
      </View>

      <View style={styles.inputOut}>
       <Feather name="smartphone" size={24} color={phoneFocus===true? colors.text1 : colors.text2} />
        <TextInput placeholder='Phone Number' style={styles.input}
         onFocus={()=>{
            setFullName(false)
            setEmailFocus(false)
            setPhoneFocus(true)
            setPasswordFocus(false)
            setShowPassword(false)
            setCPasswordFocus(false)
         }}
        />
      </View>

      {/* Password Section */}
      <View style={styles.inputOut}>
       <MaterialIcons name="lock-clock" size={24} color={PasswordFocus === true? colors.text1: colors.text2} />
        <TextInput placeholder='Password' style={styles.input} 
          onFocus={()=>{
            setFullName(false)
            setEmailFocus(false)
            setPhoneFocus(false)
            setPasswordFocus(true)
            setCPasswordFocus(false)
         }}

         secureTextEntry={showPassword=== false? true : false}
        />
        <Ionicons  size={24} color="black" name={!showPassword ?"ios-eye-off" : "ios-eye"}
         onPress={()=>{
            setShowPassword(!showPassword)
         }}
        />
      </View>

      <View style={styles.inputOut}>
       <MaterialIcons name="lock-clock" size={24} color={CPasswordFocus === true? colors.text1: colors.text2} />
        <TextInput placeholder='Confirm Password' style={styles.input} 
          onFocus={()=>{
            setEmailFocus(false)
            setPhoneFocus(false)
            setPasswordFocus(false)
            setCPasswordFocus(true)
         }}

         secureTextEntry={cshowPassword=== false? true : false}
        />
        <Ionicons  size={24} color="black" name={!cshowPassword ?"ios-eye-off" : "ios-eye"}
         onPress={()=>{
            setCshowPassword(!cshowPassword)
         }}
        />
      </View>
      <Text style={styles.address}>Please enter your password</Text>
      <View style={styles.inputOut}>
        <TextInput placeholder='Enter your Address' style={styles.input}
        />
      </View>
      <TouchableOpacity style={btn1}>
        <Text style={{color:colors.col1, fontSize:titles.btnTxt, fontWeight:'bold'}}>Sign up</Text>
      </TouchableOpacity>

      {/* <Text style={styles.forgot}>Forget Password?</Text> */}
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
       <Text>Already have an account?
       <Text  style={styles.signup} onPress={()=>navigation.navigate('Login')} >  Sign In</Text>
       </Text>
    </View>
  </ScrollView> 
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        // justifyContent:'center'
        marginTop:60
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
        marginVertical:6,
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
    address:{
        color:colors.text2,
        marginTop:10,
        marginBottom:5,
        fontSize:17,
        fontWeight:'600'
    },
    forgot:{
        color:colors.text2,
        marginTop:20,
        marginBottom:10,
    },
    or:{
        color:colors.text1,
        marginVertical:5,
        fontWeight:'bold'
    },
    gftxt:{
        color:colors.text2,
        marginVertical:5,
        fontSize:20
    },
    gf :{
        flexDirection:'row',
    },
    gfIcons:{
        backgroundColor:'white',
        width:50,
        margin:5,
        borderRadius:10,
        padding:5,
        alignItems:'center',
        elevation:20,
    },
    signup:{
        color:colors.text1,
        fontWeight:'bold',
        fontSize:16,
    }
})