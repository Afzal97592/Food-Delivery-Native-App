import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../global/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.Card}>
        <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myIcon} />
        <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.Card}>
        <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.myIcon} />
        <Text style={styles.text}>Pizza</Text>
        </View>
        <View style={styles.Card}>
        <MaterialCommunityIcons name="food-drumstick-outline" size={24} color="black" style={styles.myIcon} />
        <Text style={styles.text}>Chicken</Text>
        </View>
        <View style={styles.Card}>
        <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" style={styles.myIcon} />
        <Text style={styles.text}>Drink</Text>
        </View>
        <View style={styles.Card}>
        <MaterialCommunityIcons name="french-fries" size={24} color="black" style={styles.myIcon} />
        <Text style={styles.text}>fries</Text>
        </View>
        <View style={styles.Card}>
        <MaterialIcons name="icecream" size={24} color="black" style={styles.myIcon} />
        <Text style={styles.text}>Icecream</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.col1,
    width:'90%',
    elevation:10,
    borderRadius:10,
  },
  head:{
    color:colors.text1,
    fontSize:25,
    fontWeight:'400',
    margin:10,
    alignSelf:'center',
    paddingBottom:5,
    borderBottomColor:colors.text1,
    borderBottomWidth:1,
  },
  Card:{
    backgroundColor:colors.col1,
    elevation:20,
    margin:10,padding:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  myIcon:{
    marginRight:10,
    color:'#EB984E',
  },
  text:{
    color:colors.tetx3
  }
})