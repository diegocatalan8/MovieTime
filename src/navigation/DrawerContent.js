import React from "react";
import {View} from "react-native";
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Drawer, Switch, TouchableRipple, Text} from "react-native-paper";

export default function DrawerContent(props){
    console.log(props);
    const {navigation} = props;
    
    return(  
        
            <DrawerContentScrollView>
                        <Drawer.Section>
                            <Drawer.Item label="Inicio" onPress={()=> navigation.navigate("news")}/>
                        </Drawer.Section>
            </DrawerContentScrollView>
        
    );
}