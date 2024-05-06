import React from 'react'
import { ScrollView } from 'react-native';
import HeaderMain from '../../components/HeaderMain';
import BannerCarousel from "../../components/HeaderMain/BannerCarousel";

function index() {
  return (
   <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"#F5F5F5"}}>
      <HeaderMain/>
      <BannerCarousel />
    </ScrollView>
  )
}

export default index