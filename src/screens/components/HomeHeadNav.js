import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../global/style';

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
        <EvilIcons name="navicon" size={24} color="black" style={styles.myIcon} />
      <View style={styles.containerIn}>
        <Text style={styles.myText}>Foodie</Text>
        <Ionicons name="fast-food-outline" size={30} color="#EB984E" style={{marginLeft:5}}  />
      </View>
      <FontAwesome name="user-circle" size={24} color="black" style={styles.myIcon} />
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:colors.col1,
        elevation:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    containerIn:{
        flexDirection:'row',
        alignItems:'center',
    },
    myIcon:{
        color:colors.text1
    },
    myText:{
        color:colors.text1,
        fontSize:24
    }
})