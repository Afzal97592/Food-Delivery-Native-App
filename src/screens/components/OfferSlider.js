import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../../global/style'
import { MaterialIcons } from '@expo/vector-icons';



const OfferSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.OfferSlider}>
         <Swiper autoplay={true} autoplayTimeout={5}
          dotColor={colors.text2} activeDotColor={colors.text1}
         >
          <View style={styles.slides}>
            <Image source={require('../../../assets/images/offerimg1.webp')} style={styles.image} />
          </View>
          <View style={styles.slides}>
            <Image source={require('../../../assets/images/offerimg2.jpg')} style={styles.image} />
          </View>
          <View style={styles.slides}>
            <Image source={require('../../../assets/images/offerimg3.jpg')} style={styles.image} />
          </View>
         </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  OfferSlider:{
    width:'100%',
    height:200,
    backgroundColor:colors.col1,
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    // elevation:20,
    // margin:10
  },
  slides:{
    width:'100%',
    height:200,
    backgroundColor:colors.col1,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:20,
    resizeMode:'contain'
  },
 
})