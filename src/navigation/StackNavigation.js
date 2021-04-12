import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {IconButton} from "react-native-paper";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import News from "../screens/News";
import Popular from "../screens/Popular";
import Search from "../screens/Search";
const Stack = createStackNavigator();



export default function StackNavigation(props){
    
    //destructuramos los props
    const {navigation} = props;
    //Creamos una funcion que retorne un boton
    const buttonLeft = (screen) =>{
        
            switch(screen){
               
               case "movie":
               case "search":
               return( <IconButton icon="arrow-left" onPress={()=> navigation.goBack()}/>
                        
               );
                
                default:
                   return( 
                <IconButton icon="menu" onPress={()=> navigation.openDrawer()}/>
                  
                   );
            }
           
        
    }
    //Creamos una funcion que retorne un boton
    const buttonRight = ()=>{
        return(
            <IconButton icon="magnify" onPress={()=>{navigation.navigate("search")}}/>
        );
    }

    return(
    <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{title:"MovieTime", headerLeft:()=>buttonLeft(), headerRight:()=>buttonRight()}}/>
        <Stack.Screen name="movie" component={Movie} options={{title:"" , headerTransparent:true, headerLeft:()=>buttonLeft("movie"), headerRight:()=>buttonRight()}}/>
        <Stack.Screen name="news" component={News} options={{title:"Nuevas Peliculas", headerLeft:()=>buttonLeft("news"), headerRight:()=>buttonRight()}}/>
        <Stack.Screen name="popular" component={Popular} options={{title:"Peliculas Populares", headerLeft:()=>buttonLeft("popular"), headerRight:()=>buttonRight()}}/>
        <Stack.Screen name="search" component={Search} options={{title:"", headerLeft:()=>buttonLeft("search")}}/>
    </Stack.Navigator>
    );
}