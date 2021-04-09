import React from "react";
import {View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback} from "react-native";
import { Title } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import {BASE_PATH_IMG} from "../utils/constants";

const {width} = Dimensions.get("window");
const ITEM_WIDTH = Math.round(width * 0.3);


export default function CarouselMulti(props){
    
    const {data, navigation} = props;

    return(
        <Carousel 
        layout= {"default"}
        data ={data}
        renderItem={(data) => <RenderItem data={data} navigation={navigation}  />}
        sliderWidth = {width}
        itemWidth= {ITEM_WIDTH}
        />
    );
}

function RenderItem(){
    return(
        <View>
                <Title>
                Hola
                </Title>
        </View>
    );
}